import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef<any>;

  constructor(

    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === 'projects') {
        this.main.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
    });
  }

}
