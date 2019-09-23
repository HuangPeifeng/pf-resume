import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { PreviewComponent } from './components/preview/preview.component';

const COMPONENTS = [
  HeaderComponent,
  PreviewComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ThemeModule { }
