import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() show = false;
  @Input() imgUrl;
  @Output() closePreview = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closePreview.emit(true);
  }

}
