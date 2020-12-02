import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild("main", { static: false }) main: ElementRef<any>;

  skills = [
    { name: "Angular 2+", percent: 95 },
    { name: "Javascript", percent: 90 },
    { name: "Html", percent: 90 },
    { name: "CSS & SCSS", percent: 90 },
    { name: "React", percent: 80 },
    { name: "Redux", percent: 80 },
    { name: "Typescript", percent: 80 },
    { name: "JQuery", percent: 80 },
    { name: "Git", percent: 80 },
    { name: "NodeJS", percent: 80 },
    { name: "MongoDB", percent: 70 },
    { name: "MySQL", percent: 50 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(res => {
      if (res === "skills") {
        this.main.nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
      }
    });
  }
}
