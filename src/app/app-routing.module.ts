import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsByTypeComponent } from './products-by-type/products-by-type.component';
import { ProductDetailsItemComponent } from './product-details-item/product-details-item.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { securityGuard } from './security.guard';
import { DownLoadComponent } from './down-load/down-load.component';
import { adminSecurityGuard } from './admin-security.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'product',
    component: ListProductComponent,
    canActivate: [adminSecurityGuard],
  },
  { path: 'product/:id', component: DetailsProductComponent },
  { path: 'type/:id', component: ProductsByTypeComponent },
  { path: 'sp/:id', component: ProductDetailsItemComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'download',
    component: DownLoadComponent,
    canActivate: [securityGuard],
  },
  { path: 'payment', component: PaymentComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [securityGuard],
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
