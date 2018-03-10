import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'share-setting',
    templateUrl: 'share-setting.html'
})

export class ShareSetting implements OnInit {
    share: any = {
        title: '',
        desc: '',
        icon: ''
    };
    constructor() { }

    ngOnInit() { }
}