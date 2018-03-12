import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'link-entry',
    templateUrl: 'link-entry.html'
})
export class LinkEntry implements OnInit {
    list: any;
    @Output() change: EventEmitter<any> = new EventEmitter();
    constructor(
        public we7: We7Service,
        public http: HttpClient,
        private subject: NzModalSubject,
    ) { }

    ngOnInit() {
        let url = this.we7.getWebUrl('getlinks', { op: 'entry' });
        this.http.get(url).subscribe((res: any) => {
            let list = [];
            for (let key in res) {
                let module = res[key];
                list.push({
                    title: module.title,
                    menus: module.cover
                });
            }
            this.list = list;
        });
    }

    onSelect(item: any){
        this.subject.next({
            c: 'entry',
            a: 'site',
            do: item.do,
            m: item.module,
            direct: item.direct
        });
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
    }
}
