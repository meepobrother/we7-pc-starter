import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { ZORROMODULES, ABCMODULES } from '../delon.module';

// region: third libs
import { CountdownModule } from 'ngx-countdown';
import { NzSchemaFormModule } from 'nz-schema-form';
const THIRDMODULES = [
    CountdownModule,
    NzSchemaFormModule
];
// endregion
// region: your componets & directives
import { AdvModel } from './adv-model/adv-model';
import { GridsModel } from './grids-model/grids-model';


import { LinkSelect } from './link-select/link-select';
import { LinkArticle } from './link-select/link-article/link-article';
import { LinkCate } from './link-select/link-cate/link-cate';
import { LinkEntry } from './link-select/link-entry/link-entry';
import { LinkLocation } from './link-select/link-location/link-location';
import { LinkModule } from './link-select/link-module/link-module';
import { LinkNews } from './link-select/link-news/link-news';
import { LinkPage } from './link-select/link-page/link-page';
import { LinkTelphone } from './link-select/link-telphone/link-telphone';
import { LinkMine } from './link-select/link-mine/link-mine';


import { IconSelect } from './icon-select/icon-select';
import { ImageSelect } from './image-select/image-select';

const MODELS = [
    AdvModel,
    LinkSelect,
    LinkArticle,
    LinkCate,
    LinkEntry,
    LinkLocation,
    LinkModule,
    LinkNews,
    LinkPage,
    LinkTelphone,
    LinkMine,
    GridsModel
];

const COMPONENTS = [
    IconSelect,
    ImageSelect
];

const DIRECTIVES = [];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        ...MODELS
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        ...MODELS
    ],
    entryComponents: [
        ...MODELS
    ]
})
export class SharedModule { }
