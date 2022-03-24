import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { ChildBComponent } from './parent/child-b/child-b.component';
import { ChildCComponent } from './parent/child-c/child-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
