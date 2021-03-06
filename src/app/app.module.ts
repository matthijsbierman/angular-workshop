import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { TableAddItemComponent } from './table-add-item/table-add-item.component';

import { AppRoutingModule } from './app.routing.module';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableItemComponent,
    TableAddItemComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
