import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ecommerceComponent } from './components/ecommerce.component'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,ecommerceComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [ecommerceComponent]
})
export class AppModule { }
