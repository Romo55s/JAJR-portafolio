import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Exam simulation for Programming course',
      technologies: 'JavaScript, HTML, CSS, PHP',
      description: [
        'Worked on front-end development, session management and assisted in back-end development',
        'Assisted with the development of the certificate and its display',
      ],
    },
    {
      title: 'Forest animal game for Kids',
      technologies: 'JavaScript, HTML, CSS',
      description: [
        'Worked on front-end development',
        'Implemented all the logic for sessions using localStorage',
        'Merged my colleagues’ branches and integrated all the code, making it 100% functional'
      ],
    },
    {
      title: 'Bingo',
      technologies: 'C++',
      description: [
        'Worked on the loading screen',
        'Implemented the horizontal and full card game modes',
        'With my teammate, implemented the logic to save data in binary files'
      ],
    },
    {
      title: 'Sports Online Store',
      technologies: 'JavaScript, HTML, CSS, PHP, MySQL',
      description: [
        'Handled all the front-end development',
        'Implemented the login logic',
        'Implemented the shopping cart functionality',
        'Encrypted user passwords, implemented a captcha, and utilized LocalStorage',
        'Managed the MySQL database',
      ],
    },
    {
      title: 'Maze "Crazy Cart"',
      technologies: 'C++',
      description: [
        'Worked on the logic for cart speed and collisions',
        'Implemented all the game levels and the logic to delimit the maze walls',
        'Implemented user score and data saving to txt files'
      ],
    }
  ]
}
