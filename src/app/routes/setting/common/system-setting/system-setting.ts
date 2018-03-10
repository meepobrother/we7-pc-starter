import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'system-setting',
    templateUrl: 'system-setting.html'
})

export class SystemSetting implements OnInit {
    page: any = {
        title: '',
        desc: ''
    };
    constructor() { }

    ngOnInit() { }
}