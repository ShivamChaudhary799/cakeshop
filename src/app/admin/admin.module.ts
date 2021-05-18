import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditComponent } from '../edit/edit.component';
import { AddcakeComponent } from '../addcake/addcake.component';

const routes: Routes =[
  {path:'',component: AdminComponent},
  {path: 'edit/:cakeId', component:EditComponent},
  {path: 'addcakes', component: AddcakeComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
