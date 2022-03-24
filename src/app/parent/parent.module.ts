import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    ChildCComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ParentModule { }
