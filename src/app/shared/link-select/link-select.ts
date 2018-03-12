import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'link-select',
    templateUrl: 'link-select.html',
    styleUrls: ['./link-select.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LinkSelect implements OnInit {
    tabs: any[] = [{
        title: '本模块',
        op: 'mine'
    },{
        title: '系统菜单',
        op: 'entry'
    }, {
        title: '后台菜单',
        op: 'module'
    }, {
        title: '微页面',
        op: 'pagelist'
    }, {
        title: '文章',
        op: 'article'
    }, {
        title: '文章分类',
        op: 'cate'
    }, {
        title: '图文回复',
        op: 'news'
    }, {
        title: '一键导航',
        op: 'location'
    }, {
        title: '一键拨号',
        op: 'telphone'
    }];
    constructor(
        public we7: We7Service,
        public http: HttpClient,
        private subject: NzModalSubject,
    ) { }

    ngOnInit() {}

    onChange(url: string) {
        // console.log(url);
    }
}