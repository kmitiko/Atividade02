import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule }from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule }from '@angular/material/sidenav';
import {MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { JogoComponent } from './jogo/jogo.component';
import { SorteioComponent } from './jogo/sorteio/sorteio.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    SorteioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
