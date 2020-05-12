import { Component, Input, Output, EventEmitter, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterContentChecked, AfterViewChecked {
  @Input() tabId: string;
  @Input() tabTitle: string;
  @Input() tabContent: any;
  @Input() actTab: string;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter<any>();
  showContent: boolean;

  constructor() { }

  ngAfterContentChecked() {
    if (this.tabId == this.actTab) {
      this.showContent = true;
    } else {
      this.showContent = false;
    }
  }

  ngAfterViewChecked() {
    if (this.tabId == this.actTab) {
      const tmpTab = document.getElementById(this.tabId);
      tmpTab.classList.add('tabs__title--active');
    } else {
      const tmpTab = document.getElementById(this.tabId);
      tmpTab.classList.remove('tabs__title--active');
    }
  }

  onClick() {
    this.onTabClick.emit(this.tabId)
  }

  setShowContent(value: boolean) {
    this.showContent = value;
  }

}
