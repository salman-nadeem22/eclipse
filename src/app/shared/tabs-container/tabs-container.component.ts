import {Component, ContentChildren, AfterContentInit, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) public tabs?: QueryList<TabComponent>;

  constructor() {
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false
    });
    tab.active = true;

    return false;
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(tab => tab.active);
    if (!activeTabs || !activeTabs.length) {
      this.selectTab(this.tabs!.first);
    }
  }
}
