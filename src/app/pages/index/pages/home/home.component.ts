import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === 'home') {
        this.main.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        this.router.navigate([], {
          fragment: null
        });
      }
    });
  }

  goNext() {
    this.router.navigate([], {
      fragment: null
    }).then(() => {
      this.router.navigate([], {
        fragment: 'about'
      });
    });
  }

}
