import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  element;
  constructor() {}

  ngOnInit(): void {}

  darkMoodActivation() {
    this.element = document.body;
    this.element.classList.toggle('dark-mode');
  }
}
