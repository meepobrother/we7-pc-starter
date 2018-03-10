import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class We7Service {
    queryParams: any = {};
    constructor(
        public router: Router
    ) {
        let tree = this.router.parseUrl(location.search);
        this.queryParams = tree.queryParams;
    }

    getUrl(_do: string, _params: any = {}) {
        this.queryParams['do'] = _do;
        this.queryParams = { ...this.queryParams, ..._params };
        let url = this.serializeQueryParams(this.queryParams);
        return url;
    }

    getMobileUrl(_do: string, _params: any = {}) {
        return '/app/index.php' + this.getUrl(_do, _params);
    }

    getWebUrl(_do: string, _params: any = {}) { 
        return '/web/index.php' + this.getUrl(_do, _params);
    }


    serializeQueryParams(params: { [key: string]: any }): string {
        const strParams: string[] = Object.keys(params).map((name) => {
            const value = params[name];
            return Array.isArray(value) ?
                value.map(v => `${this.encodeUriQuery(name)}=${this.encodeUriQuery(v)}`).join('&') :
                `${this.encodeUriQuery(name)}=${this.encodeUriQuery(value)}`;
        });
        return strParams.length ? `?${strParams.join("&")}` : '';
    }

    encodeUriQuery(s: string): string {
        return this.encodeUriString(s).replace(/%3B/gi, ';');
    }

    encodeUriString(s: string): string {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    }
}