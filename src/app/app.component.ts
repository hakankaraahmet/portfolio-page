import { Component } from '@angular/core';

import { MainPartComponent } from './components/main-part/main-part.component';

@Component({
  selector: 'app-root',
  imports: [MainPartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'portfolio-page';
}
