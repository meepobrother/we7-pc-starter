import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';

import { SettingPage } from './setting/setting';
// 页面设置
import { HomeSettingPage } from './setting/home-setting/home-setting';
import { IndexSettingPage } from './setting/index-setting/index-setting';
import { SmsSettingPage } from './setting/sms-setting/sms-setting';

// 设置组件
import { ShareSetting } from './setting/common/share-setting/share-setting';
import { FooterSetting } from './setting/common/footer-setting/footer-setting';
import { SystemSetting } from './setting/common/system-setting/system-setting';
import { QuickSetting } from './setting/common/quick-setting/quick-setting';
import { SidebarSetting } from './setting/common/sidebar-setting/sidebar-setting';

import { AdvsSetting } from './setting/common/advs-setting/advs-setting';
import { GridsSetting } from './setting/common/grids-setting/grids-setting';

export const components = [
    ShareSetting,
    FooterSetting,
    SystemSetting,
    QuickSetting,
    SidebarSetting,
    AdvsSetting,
    GridsSetting
];


import { RunnerManage } from './manage/runner-manage/runner-manage';
import { TaskManage } from './manage/task-manage/task-manage';
import { MemberManage } from './manage/member-manage/member-manage';
@NgModule({
    imports: [SharedModule, RouteRoutingModule],
    declarations: [
        DashboardComponent,
        // passport pages
        UserLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent,
        // single pages
        CallbackComponent,
        Exception403Component,
        Exception404Component,
        Exception500Component,
        // setting
        SettingPage,
        HomeSettingPage,
        IndexSettingPage,
        SmsSettingPage,
        // manage
        RunnerManage,
        TaskManage,
        MemberManage,
        ...components
    ]
})
export class RoutesModule { }
