import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList = [
    { name: '關於我', url: 'about' },
    { name: '技能', url: 'skills' },
    { name: '學經歷', url: 'edu' },
    { name: '專案與作品', url: 'projects' }
  ];

  menuOpen = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.menuOpen = !this.menuOpen;
  }

  goHash(item) {
    this.router.navigate([], {
      fragment: null
    }).then(() => {
      this.router.navigate([], {
        fragment: item.url
      });
    });
  }

}
