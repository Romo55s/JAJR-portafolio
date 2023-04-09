import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Tony Romo'],
    ['DOB', '04/06/2002'],
    ['Work Exp','Academics Proyects '],
    ['Education', 'Current 6th sem. Comp. Sys. Eng. student'],
    ['Interests','Internship or Trainee'],
  ];

  aboutMe: string[] = [
    'Hello! I am a computer systems engineering student currently pursuing my sixth semester.',
    'As a lifelong learner, I am always looking to expand my knowledge and keep up with the latest technologies.',
    'I consider myself an open-minded individual who is quick to adapt to new environments and challenges.',
    'With a passion for problem-solving and a drive to excel, I am eager to take on new opportunities and push myself to reach my full potential.'
  ];
}
