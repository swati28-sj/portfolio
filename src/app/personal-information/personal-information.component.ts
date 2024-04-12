import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
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
  myData: string[][]=[
    ['Name', 'Swati Jha'],
    ['Email', 'swatijha267@gmail.com'],
    ['Phone Number', '8860409218'],
    ['Address', 'Delhi'],
  ];
  aboutMe: string[]=[
    'Hi, I am a software Engineer with 2.5 years of experience mainly in front-end development', 
    'skilled in HTML,CSS and Java Script. Eager to explore new challenges in innovative web design projects',
    'Delivered all projects with-in deadlines.'
  ];

}
