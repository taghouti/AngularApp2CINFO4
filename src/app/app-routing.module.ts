import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListActorsComponent} from './list-actors/list-actors.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FormProductComponent} from './form-product/form-product.component';
import {FormActorComponent} from './form-actor/form-actor.component';
const ROUTES: Routes = [
  {path: '', redirectTo: 'homeProduct', pathMatch: 'full'},
  {path: 'actors', component: ListActorsComponent},
  {path: 'homeProduct', component: HomeComponent},
  {path: 'addActor', component: FormActorComponent},
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
