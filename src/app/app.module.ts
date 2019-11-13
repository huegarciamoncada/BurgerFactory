import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgersComponent } from './burgers/burgers.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { BurgerComponent } from './burger/burger.component';
import { AddLegumeComponent } from './add-legume/add-legume.component';
import { AddBurgerComponent } from './add-burger/add-burger.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    BurgerComponent,
    AddLegumeComponent,
    AddBurgerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
