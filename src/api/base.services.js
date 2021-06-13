import {environment} from "../environments/environment.dev";


export class BaseServices {

    static API_V1 = environment.API_BASE_URL;
    token = '';

    static getBaseUrl() {
        return BaseServices.API_V1;
    };


    static getUrl() {
        return `${this.getBaseUrl()}`;
    }


}
