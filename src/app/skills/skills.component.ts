import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML CSS JS',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Good',
      rating: 75,
    },
    {
      name: 'MySQL',
      level: 'Regular',
      rating: 60,
    },
    {
      name: 'Java',
      level: 'Regular',
      rating: 65,
    },
    {
      name: 'PHP',
      level: 'Intermidiate',
      rating: 75,
    }
  ]
}
