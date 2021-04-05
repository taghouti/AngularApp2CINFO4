import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {ProductComponent} from './product/product.component';
import {BestLikeComponent} from './best-like/best-like.component';
import {ListActorsComponent} from './list-actors/list-actors.component';
import {ActorComponent} from './actor/actor.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormProductComponent } from './form-product/form-product.component';
import { FormActorComponent } from './form-actor/form-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    BestLikeComponent,
    ListActorsComponent,
    ActorComponent,
    NotFoundComponent,
    FormProductComponent,
    FormActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
