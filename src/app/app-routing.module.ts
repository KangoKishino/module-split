import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { ChildBComponent } from './parent/child-b/child-b.component';
import { ChildCComponent } from './parent/child-c/child-c.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'parent/child-a', component: ChildAComponent },
  { path: 'parent/child-b', component: ChildBComponent },
  { path: 'parent/child-c', component: ChildCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
