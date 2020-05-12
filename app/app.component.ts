import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  tabs = [ 1, 2 ];
  actTabId = 0;

  public dec() {
    if(this.tabs.length > 1) {
      this.tabs = this.tabs.slice(0, -1);
    }
    if(this.tabs.length < this.actTabId + 1) {
      this.setActiveTab(this.tabs.length - 1);
    }
  }

  public inc() {
    console.log('inc actTabId : ', this.actTabId);
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
  }

  public setActiveTab(id: number) {
    this.actTabId = id;
  }

}
