import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenApproachComponent } from './template-driven-approach/template-driven-approach.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDrivenApproachComponent } from './reactive-driven-approach/reactive-driven-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenApproachComponent,
    ReactiveDrivenApproachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
