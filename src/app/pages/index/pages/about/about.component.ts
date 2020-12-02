import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild("main", { static: false }) main: ElementRef<any>;

  cover = "assets/images/head.jpg";

  contents = `<div>現任職於順發電腦股份有限公司擔任全端工程師約一年時間，目前主力於前端，以 React 框架開發購物網，並協助後端 Nodejs 開發，資料庫為 MongoDB，並部署至 Azure，目前也正在學習專案管理的部分。</div><div>在學期間曾於廈門群鑫機械公司實習建立基礎前端技術，後來任職於高雄哈瑪星科技公司擔任前端開發工程師三年時間，使用 Angular 作為主要框架，與後端人員偕同開發專案，主要負責前端刻版、RWD 及操作邏輯撰寫等，目前已有許多上線中平台。</div><div>為培養良好的自學能力，在開發上遇到困難時會自行尋求各式資源，增進自己的專業知識，並實務操作提升技術熟練程度，如程式設計與各式 Web Template 等，藉以從中學習如何獨立解決問題。同時，亦利用業餘時間學習新技術，期許自己的能力更加紮實。</div>`;

  isPhone = false;

  @HostListener("window:resize")
  onResize() {
    this.isPhone = document.body.clientWidth <= 400;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === "about") {
        this.main.nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
      }
    });
  }
}
