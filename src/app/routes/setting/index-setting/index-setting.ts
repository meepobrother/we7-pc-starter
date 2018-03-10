import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { We7Service } from '@core/we7.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
    selector: 'index-setting',
    templateUrl: 'index-setting.html',
    styleUrls: ['./index-setting.scss']
})
export class IndexSettingPage implements OnInit {
    url: string;
    isVisible: boolean = false;
    loading: boolean = false;

    tabs: any[] = [{
        name: '滑动广告',
        code: 'advs'
    }, {
        name: '导航项目',
        code: 'grids'
    }, {
        name: '系统设置',
        code: 'system'
    }, {
        name: '分享设置',
        code: 'share'
    }, {
        name: '底部菜单',
        code: 'footer'
    }, {
        name: '快捷菜单',
        code: 'quick'
    }, {
        name: '侧边栏菜单',
        code: 'sidebar'
    }];

    form: FormGroup;
    advForm: FormGroup;
    action: string;

    advsArray: FormArray;
    gridsArray: FormArray;
    constructor(
        public fb: FormBuilder,
        private we7: We7Service
    ) {
        this.form = this.fb.group({
            advs: this.fb.array([]),
            grids: this.fb.array([])
        });
        this.advsArray = this.form.get('advs') as FormArray;
        this.gridsArray = this.form.get('grids') as FormArray;

        this.advForm = this.fb.group({
            title: [''],
            image: [''],
            link: ['']
        });
    }

    ngOnInit() {
        this.action = this.we7.getWebUrl('uploadimage');
    }

    handleCancel(e: any) {
        this.isVisible = false;
    }

    handleOk(e: any) {
        (this.form.get('advs') as FormArray).push(this.advForm);
        this.isVisible = false;
    }

    addAdv() {
        this.isVisible = true;
    }

    handleChange(info: { file: UploadFile }) {
        if (info.file.status === 'uploading') {
            this.loading = true;
            return;
        }
        if (info.file.status === 'done') {
            this.loading = false;
            return;
        }
    }
}