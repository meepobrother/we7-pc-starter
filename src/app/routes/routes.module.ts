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
import { ShareSettingPage } from './setting/share-setting/share-setting';
import { HomeSettingPage } from './setting/home-setting/home-setting';
import { IndexSettingPage } from './setting/index-setting/index-setting';
import { FooterSettingPage } from './setting/footer-setting/footer-setting';

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
        ShareSettingPage,
        HomeSettingPage,
        IndexSettingPage,
        FooterSettingPage
    ]
})
export class RoutesModule { }
