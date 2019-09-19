import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { ThemeModule } from 'src/app/theme/theme.module';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    WorksComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ThemeModule
  ]
})
export class IndexModule { }
