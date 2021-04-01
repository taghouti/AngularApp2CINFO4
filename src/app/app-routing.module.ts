import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListActorsComponent} from './list-actors/list-actors.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
const ROUTES: Routes = [
  {path: '', redirectTo: 'homeProduct', pathMatch: 'full'},
  {path: 'actors', component: ListActorsComponent},
  {path: 'homeProduct', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:
    [RouterModule
  ]
})
export class AppRoutingModule { }
