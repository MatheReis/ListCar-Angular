import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
    MatIconModule
 ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

