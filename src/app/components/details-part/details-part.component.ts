import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExpreiencesComponent } from './expreiences/expreiences.component';

@Component({
  selector: 'app-details-part',
  imports: [AboutComponent, ExpreiencesComponent],
  templateUrl: './details-part.component.html',
  styleUrl: './details-part.component.css',
})
export class DetailsPartComponent {}
