import { Component, OnInit, Input, EventEmitter, Output, Optional, SkipSelf } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalSubject, NzModalService } from 'ng-zorro-antd';
import { We7Service } from '@core/we7.service';
import { LinkSelect } from '@shared/link-select/link-select';
@Component({
    selector: 'grids-model',
    templateUrl: 'grids-model.html'
})
export class GridsModel implements OnInit {
    uploadUrl: string;
    @Input() record: any = {
        title: '',
        link: '',
        image: ''
    };
    fileList = [];
    constructor(
        public fb: FormBuilder,
        private subject: NzModalSubject,
        private we7: We7Service,
        private modalService: NzModalService
    ) { }

    handleChange(e: any) {
        let file = e.file;
        if (file.response) {
            file.url = file.response.url;
            this.record.image = file.url;
        }
    }
    ngOnInit() {
        this.uploadUrl = this.we7.getWebUrl('uploadimage');
        this.fileList.push({
            uid: 0,
            name: '图片',
            status: 'done',
            url: this.record.image,
        });
    }
    cancel() {
        this.subject.destroy();
    }
    ok() {
        this.subject.next(this.record);
        this.cancel();
    }
    linkModal: any;
    linkSelect() {
        this.linkModal = this.modalService.open({
            title: '选择链接',
            content: LinkSelect,
            zIndex: 1001
        });
        this.linkModal.subscribe(result => {
            if (result === 'onShown' ||
                result === 'onHide' ||
                result === 'onHidden' ||
                result === 'onDestroy' ||
                result === 'onCancel'
            ) { } else {
                this.record.link = result;
            }
        });
    }
}