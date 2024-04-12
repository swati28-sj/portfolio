import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
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

  projects: Project[] = [
    {
      title: 'Champ(Cargo)',
      technologies: 'HTML, CSS, Angular, Material',
      description: [
        'Worked as a Software Engineer to create web pages in the project.',
        'Created User friendly web pages using Angular and their existing libraries and documentation,',
        'Also Integrated API"s for completing required functionality.'
      ]
    },
  ]
}
