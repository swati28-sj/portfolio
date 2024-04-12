import { Component, HostBinding } from '@angular/core';
import { Education } from '../models/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @HostBinding('class.pc') pcMode = false;
  educationList: Education[]=[
    {
      institute: 'Abdul kalam Technical University',
      course: 'Bachelor of Technology',
      duration: '2017-2021',
      score: '80%'
    },
    {
      institute: 'CBSE',
      course: 'Intermediate',
      duration: '2016-2017',
      score: '66%'
    },
    {
      institute: 'CBSE',
      course: 'High School',
      duration: '2017-2021',
      score: '90%'
    },
  ]
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.pcMode = false;

              if (breakpoint === Breakpoints.WebLandscape) this.pcMode = true;
            }
        },
      });
  }

}
