import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.components';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      // every second it's increasing by 5
      this.progress = this.progress + 5;
      //stop spinner if 100 reached
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent, {data: {
      progress: this.progress
    }});
  }

}
