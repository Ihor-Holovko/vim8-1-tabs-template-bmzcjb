import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, TabComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
