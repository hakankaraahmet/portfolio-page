import { Component } from '@angular/core';
import { PROJECTS } from '../../../constants/projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
}
