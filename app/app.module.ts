import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './api/in-memory-data.service';
// Components
import { AppComponent }         from './app.component';
import { CartComponent }   from './components/cart/cart.component';
import { CartInfo }   from './components/cart-info/cart-info.component';
import { DishesComponent }   from './components/dishes/dishes.component';
// Services
import { DishesService }          from './services/dishes.service';
import { CartService }          from './services/cart.service';
// Pipes
import { CatFilterPipe } from './pipes/cat-filter.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CartComponent,
    CartInfo,
    DishesComponent,
    CatFilterPipe
  ],
  providers: [
    DishesService,
    CartService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
