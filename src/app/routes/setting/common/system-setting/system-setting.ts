import { Component, OnInit, Input } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'system-setting',
    templateUrl: 'system-setting.html'
})

export class SystemSetting implements OnInit {
    @Input() page: string = 'index';
    record: any = {
        title: '',
        desc: ''
    };
    constructor(
        private we7: We7Service,
        public http: HttpClient,
    ) { }

    ngOnInit() { 
        let url = this.we7.getWebUrl('settingget', { code: `${this.page}.system` });
        this.http.get(url).subscribe((res: any) => {
            if (res) {
                this.record = res;
            }
        });
    }

    saveToCloud() {
        let url = this.we7.getWebUrl('settingsave');
        return this.http.post(url, {
            [`${this.page}.system`]: this.record
        }).subscribe(res => {
            console.log(res);
        });
    }

    ok() {
        this.saveToCloud();
    }
}