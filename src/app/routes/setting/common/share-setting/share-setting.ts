import { Component, OnInit, Input } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'share-setting',
    templateUrl: 'share-setting.html'
})
export class ShareSetting implements OnInit {
    record: any = {
        title: '',
        desc: '',
        icon: ''
    };
    uploadUrl: string;
    @Input() page: string = 'index';
    constructor(
        private we7: We7Service,
        public http: HttpClient,
    ) { }

    ngOnInit() {
        this.uploadUrl = this.we7.getWebUrl('uploadimage');
        let url = this.we7.getWebUrl('settingget', { code: `${this.page}.share` });
        this.http.get(url).subscribe((res: any) => {
            if (res) {
                this.record = res;
            }
        });
    }

    handleChange(e: any) {
        let file = e.file;
        if (file.response) {
            file.url = file.response.url;
            this.record.icon = file.url;
        }
    }

    saveToCloud() {
        let url = this.we7.getWebUrl('settingsave');
        return this.http.post(url, {
            [`${this.page}.share`]: this.record
        }).subscribe(res => {
            console.log(res);
        });
    }

    ok() {
        this.saveToCloud();
    }
}