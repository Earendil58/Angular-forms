import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDrivenApproachComponent } from './reactive-driven-approach/reactive-driven-approach.component';
import { AppComponent } from './app.component';
import { TemplateDrivenApproachComponent } from './template-driven-approach/template-driven-approach.component';

const routes: Routes =
[
  {
    path: 'home', component: AppComponent
  },
  {
    path: 'reactive', component: ReactiveDrivenApproachComponent
  },
  {
    path: 'template', component: TemplateDrivenApproachComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
