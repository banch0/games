import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@Component({
  selector: 'app-them',
  templateUrl: './them.component.html',
  styleUrls: ['./them.component.scss']
})
export class ThemComponent implements OnInit {
  progressValue = 60;
  color = 'primary';
  isDeterminate = true;

  step(val: number) {
    this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  }

  constructor() { }

  ngOnInit() {
  }

}
