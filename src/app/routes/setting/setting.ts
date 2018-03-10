import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'setting',
    templateUrl: 'setting.html',
    styleUrls: ['./setting.scss']
})
export class SettingPage implements OnInit {
    current: number = 0;
    constructor(
        private _message: NzMessageService
    ) { }

    ngOnInit() { }

    pre() {
        this.current -= 1;
    }

    next() {
        this.current += 1;
    }

    done() {
        this._message.success('done');
    }
}