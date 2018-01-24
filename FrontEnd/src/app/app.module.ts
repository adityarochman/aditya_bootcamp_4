import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DenimComponent } from './denim/denim.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { OutwearComponent } from './outwear/outwear.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { ShortComponent } from './short/short.component';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    AccessoriesComponent,
    DenimComponent,
    FootwearComponent,
    JeansComponent,
    OutwearComponent,
    PantsComponent,
    ShirtComponent,
    TShirtComponent,
    ShortComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpModule,
    RouterModule.forRoot ([
      { path : '', component : MainComponent },
      { path : 'detail/:id', component : DetailComponent },
      { path : 'accessories', component : AccessoriesComponent },
      { path : 'denim', component : DenimComponent },
      { path : 'footwear', component : FootwearComponent },
      { path : 'jeans', component : JeansComponent },
      { path : 'outwear', component : OutwearComponent },
      { path : 'pants', component : PantsComponent },
      { path : 'shirt', component : ShirtComponent },
      { path : 't-shirt', component : TShirtComponent },
      { path : 'short', component : ShortComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
