import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef<any>;

  constructor(

    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === 'edu') {
        this.main.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
    });
  }

}
