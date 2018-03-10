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

    form: FormGroup;
    advForm: FormGroup;
    action: string;
    constructor(
        public fb: FormBuilder,
        private we7: We7Service
    ) {
        this.form = this.fb.group({
            advs: this.fb.array([]),
            grids: this.fb.array([])
        });

        this.advForm = this.fb.group({
            title: [''],
            image: [''],
            link: ['']
        });
    }

    ngOnInit() {
        this.action = this.we7.getWebUrl('uploadimage');
    }

    handleCancel() {
        this.isVisible = false;
    }

    handleOk() {
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