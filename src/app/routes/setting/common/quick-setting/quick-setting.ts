import { Component, OnInit, Input } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { SimpleTableChange, SimpleTableFilter, XlsxService } from '@delon/abc';
import { AdvModel } from '@shared/adv-model/adv-model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'quick-setting',
    templateUrl: 'quick-setting.html'
})
export class QuickSetting implements OnInit {
    openAdd: boolean = false;
    url: string;
    total: number = 0;
    params: any = {
        name: ''
    };
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox' },
        {
            title: '标题', index: 'title',
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: '链接', index: 'link',
        },
        {
            title: '图片', type: 'img', width: '50px', index: 'image'
        },
        {
            title: '操作区',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => {
                        let url = `${this.url}&op=del`;
                        this.http.post(url, record).subscribe(res => {
                            this.message.success(`成功删除【${record.name}】`);
                        });
                    }
                },
                {
                    text: '编辑',
                    type: 'modal',
                    component: AdvModel,
                    click: (record: any, modal: any) => {
                        console.log(record, modal);
                        this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`);
                    }
                }
            ]
        }
    ];
    constructor(
        public message: NzMessageService,
        public st: XlsxService,
        public http: HttpClient
    ) { }

    ngOnInit() { }
    add() {
        this.openAdd = true;
    }
    checkboxChange(list: any[]) {
        console.log('checkboxChange', list);
    }
    handleCancel() {
        this.openAdd = false;
    }
    nzOnOk() {
        this.openAdd = false;
    }
}
