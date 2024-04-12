import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @HostBinding('class.pc') pcMode = false;
  
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
  skills : Skill[]=[
    {
      name: 'Angular,Angular Material',
      level: 'Intermidiate',
      rating: 70
    },
   
    {
      name: 'HTML,CSS,JavaScript',
      level: 'Intermidiate',
      rating: 70
    },
    {
      name: 'ASP.Net Core',
      level: 'Beginner',
      rating: 30
    },
    {
      name: 'Node.js',
      level: 'Intermidiate',
      rating: 65
    },
    {
      name: 'MySQL',
      level: 'Intermidiate',
      rating: 60
    }
  ]
}
