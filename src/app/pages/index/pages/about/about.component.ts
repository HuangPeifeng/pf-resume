import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef<any>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === 'about') {
        this.main.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
    });
  }

  goMail() {
    window.open('peifeng1115@gmail.com');
  }

}
