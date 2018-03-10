import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { We7Service } from '@core/we7.service';

@Component({
    selector: 'home-setting',
    templateUrl: 'home-setting.html',
    styleUrls: ['./home-setting.scss']
})
export class HomeSettingPage implements OnInit {
    tabs: any[] = [{
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
    constructor(
        public fb: FormBuilder,
        private we7: We7Service
    ) { 
        this.form = this.fb.group({
            grids: this.fb.array([])
        });
    }

    ngOnInit() { }
}