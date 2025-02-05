import { Component } from '@angular/core';

@Component({
  selector: 'app-main-part',
  imports: [],
  templateUrl: './main-part.component.html',
  styleUrl: './main-part.component.css',
})
export class MainPartComponent {
  pages = ['about', 'experience', 'projects'];

  socialMedias = [
    {
      id: 0,
      name: 'github',
      logo: '/github.svg',
      link: 'https://github.com/hakankaraahmet',
    },
    {
      id: 1,
      name: 'linkedin',
      logo: '/linkedin.svg',
      link: 'https://www.linkedin.com/in/hakan-karaahmeto%C4%9Flu/',
    },
  ];
}
