import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'UAA (Universidad Autonoma de Ags)',
      course: 'Current 6th sem. Comp. Sys. Eng. student ',
      duration: '2020 - 2024',
      score: '90%',
    }
  ];
}
