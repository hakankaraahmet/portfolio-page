import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExpreiencesComponent } from './expreiences/expreiences.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-details-part',
  imports: [AboutComponent, ExpreiencesComponent, ProjectsComponent],
  templateUrl: './details-part.component.html',
  styleUrl: './details-part.component.css',
})
export class DetailsPartComponent {}
