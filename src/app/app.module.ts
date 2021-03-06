import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';

import { DataTableModule } from 'primeng/components/datatable/datatable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, InputTextModule, ButtonModule, DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
