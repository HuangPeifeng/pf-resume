import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    { name: 'Angular 2+', percent: 90 },
    { name: 'Typescript', percent: 80 },
    { name: 'Javascript', percent: 80 },
    { name: 'Html', percent: 80 },
    { name: 'CSS & SCSS', percent: 80 },
    { name: 'JQuery', percent: 70 },
    { name: 'Git', percent: 70 },
    { name: 'Express', percent: 50 },
    { name: 'MySQL', percent: 50 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
