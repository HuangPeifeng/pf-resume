import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: false }) main: ElementRef<any>;

  projectList = [
    {
      name: 'Magic Modules',
      coverUrl: 'assets/images/magic_modules_logo.png',
      url: 'http://magic-modules.hamastar.com.tw'
    },
    {
      name: '富邦電子書城',
      coverUrl: 'assets/images/fubon_book_logo.png',
      url: 'https://fubonebook.hamastar.com.tw',
      isPreview: 'assets/images/fubon_ebook.png'
    },
    {
      name: '富邦新視界',
      coverUrl: 'assets/images/fubon_video_logo.png',
      url: 'https://video.fubonlife.com.tw',
      isPreview: 'assets/images/fubon_video.png'
    },
    {
      name: '跨閱互動教育平台',
      coverUrl: 'assets/images/kai_logo.png',
      url: 'https://ebook.kaipublish.com.hk'
    },
    {
      name: '臺北市政府電子公報資訊網',
      coverUrl: 'assets/images/tpgz_logo.png',
      url: 'https://gazette.gov.taipei'
    },
    {
      name: 'BSL俱樂部',
      coverUrl: 'assets/images/bsl_logo.png',
      url: 'https://lcy-stage.project.lightup-studio.com'
    },
    {
      name: '理特尚聖誕節促銷網頁',
      coverUrl: 'assets/images/littlesun_logo.png',
      url: 'https://huangpeifeng.github.io/Littlesun/'
    },
    {
      name: '潛行者事務所',
      coverUrl: 'assets/images/divewalker_logo.jpg',
      url: 'https://divewalker.project.lightup-studio.com'
    },
    {
      name: '跑馬燈APP',
      coverUrl: 'assets/images/marquee_logo.png',
      url: 'https://marquee.project.lightup-studio.com'
    },
    {
      name: 'AdalaArt',
      coverUrl: 'assets/images/adalaart_logo.png',
      url: 'https://adalaart.com'
    },
    {
      name: 'npm',
      coverUrl: 'assets/images/npm_logo.png',
      url: 'https://www.npmjs.com/~peifeng1115'
    }
  ];

  showPreview = false;
  previewUrl = null;

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

  openLink(item) {
    if (item.isPreview) {
      this.previewUrl = item.isPreview;
      this.showPreview = true;
    } else {
      window.open(item.url, '_blank');
    }
  }

  closePreview($event) {
    if ($event) {
      this.showPreview = false;
      this.previewUrl = null;
    }
  }

}
