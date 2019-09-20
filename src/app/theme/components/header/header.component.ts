import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList = [
    { name: '關於我' },
    { name: '技能' },
    { name: '學經歷' },
    { name: '專案與作品' }
  ];

  menuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.menuOpen = !this.menuOpen;
  }

}
