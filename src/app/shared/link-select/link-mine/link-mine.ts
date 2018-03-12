import { Component, OnInit } from '@angular/core';
import { We7Service } from '@core/we7.service';
import { HttpClient } from '@angular/common/http';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'link-mine',
    templateUrl: 'link-mine.html'
})
export class LinkMine implements OnInit {
    list: any[] = [];
    constructor(
        public we7: We7Service,
        public http: HttpClient,
        private subject: NzModalSubject,
    ) { }

    ngOnInit() {
        let url = this.we7.getWebUrl('getlinks', { op: 'mine' });
        this.http.get(url).subscribe((res: any) => {
            this.list = res;
        });
    }

    onSelect(item: any) {
        this.subject.next({
            c: 'entry',
            a: 'site',
            do: item.do,
            m: item.module,
            direct: item.direct,
            type: 'link',
            in: true
        });
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
    }
}