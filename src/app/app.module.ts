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
import { TheBestSellProductComponent } from './the-best-sell-product/the-best-sell-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { TypeProductComponent } from './type-product/type-product.component';
import { ProductsByTypeComponent } from './products-by-type/products-by-type.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsItemComponent } from './product-details-item/product-details-item.component';
import { RealatedProductsComponent } from './realated-products/realated-products.component';
import { PaymentComponent } from './payment/payment.component';

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
    TheBestSellProductComponent,
    NewProductComponent,
    TypeProductComponent,
    ProductsByTypeComponent,
    ProductDetailsItemComponent,
    RealatedProductsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
