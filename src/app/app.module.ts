import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetailsComponent } from './components/authors-details/authors-details.component';
import { AuthorListComponent } from './components/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    AuthorsComponent,
    AuthorsDetailsComponent,
    AuthorListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
