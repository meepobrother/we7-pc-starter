import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { We7Service } from '@core/we7.service';
@Component({
    selector: 'image-upload',
    templateUrl: 'image-upload.html',
    styleUrls: ['./image-upload.css']
})
export class ImageUpload implements OnInit {
    loading = false;
    avatarUrl: string = '';
    action: string = '';
    @Input() title: string = '选择图片';
    @Output() onUpload: EventEmitter<any> = new EventEmitter();
    constructor(
        private msg: NzMessageService,
        private we7: We7Service
    ) { }

    ngOnInit() {
        this.action = this.we7.getWebUrl('uploadimage');
    }

    beforeUpload = (file: File) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            this.msg.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.msg.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    private getBase64(img: File, callback: (img: any) => void) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
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