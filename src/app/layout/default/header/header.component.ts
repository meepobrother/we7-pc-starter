import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    searchToggleStatus: boolean;

    constructor(public settings: SettingsService) { }

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }

}
