import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailsProductComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    NotfoundComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
