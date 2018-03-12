import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { SimpleTableChange, SimpleTableFilter, XlsxService } from '@delon/abc';
import { AdvModel } from '@shared/adv-model/adv-model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { We7Service } from '@core/we7.service';
@Component({
    selector: 'advs-setting',
    templateUrl: 'advs-setting.html'
})
export class AdvsSetting implements OnInit {
    @ViewChild('st') stable: SimpleTableComponent;
    @Input() page: string = 'index';
    url: string;
    total: number = 0;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox' },
        { title: '标题', index: 'title', sorter: (a, b) => a.length - b.length },
        { title: '图片', type: 'img', width: '50px', index: 'image' },
        {
            title: '操作区',
            buttons: [{
                text: '删除',
                type: 'del',
                click: (record: any) => {
                    let index = this.list.indexOf(record);
                    this.list.splice(index, 1);
                    this.stable.load();
                    this.saveToCloud();
                }
            }, {
                text: '编辑',
                type: 'modal',
                component: AdvModel,
                modalOptions: {
                    closable: true,
                    showConfirmLoading: true,
                },
                click: (record: any, modal: any) => {
                    this.message.success(`保存成功`);
                    this.saveToCloud();
                }
            }]
        }
    ];
    list: any[] = [];
    constructor(
        public message: NzMessageService,
        public st: XlsxService,
        public http: HttpClient,
        public fb: FormBuilder,
        public we7: We7Service,
        private modalService: NzModalService
    ) { }

    saveToCloud() {
        let url = this.we7.getWebUrl('settingsave');
        return this.http.post(url, {
            [`${this.page}.advs`]: this.list
        }).subscribe(res => {
            console.log(res);
        });
    }

    ngOnInit() {
        this.url = this.we7.getWebUrl('settingget', { code: `${this.page}.advs` });
        this.http.get(this.url).subscribe((res: any) => {
            if (res) {
                this.list = res;
            }
        });
    }
    addModal: any;
    add() {
        this.addModal = this.modalService.open({
            title: '添加广告',
            content: AdvModel,
            closable: true,
            footer: false
        });
        this.addModal.subscribe(result => {
            if (result === 'onShown' ||
                result === 'onHide' ||
                result === 'onHidden' ||
                result === 'onDestroy' ||
                result === 'onCancel'
            ) { } else {
                this.list.push(result);
                this.stable.load();
                this.saveToCloud();
            }
        });
    }

    checkboxChange(list: any[]) {
        console.log('checkboxChange', list);
    }
}