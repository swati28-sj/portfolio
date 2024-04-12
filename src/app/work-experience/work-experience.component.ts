import { Component, HostBinding } from '@angular/core';
import { WorkExperience } from '../models/models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  @HostBinding('class.pc') pcMode = false;
  workExpList: WorkExperience[]=[
    {
      role: 'Software Engineer',
      company: 'Coforge',
      duration: '2021 - Present',
      description: [
        'Worked as a Front-End Developer to develop web application using Angular.',
        'Created Web Pages, Integrated API"s also work with libraries.'
      ],
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
