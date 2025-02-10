import { Component } from '@angular/core';
import { EXPERIENCES } from '../../../constants/experiences';

@Component({
  selector: 'app-expreiences',
  imports: [],
  templateUrl: './expreiences.component.html',
  styleUrl: './expreiences.component.css',
})
export class ExpreiencesComponent {
  experiences = EXPERIENCES;
}
