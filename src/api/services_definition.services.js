import {BaseServices} from "./base.services";

export class Services_definitionServices extends BaseServices {

    static token = JSON.parse(localStorage.getItem('token'));

    static getClassUrl() {
        return `${this.getUrl()}`;
    }






}
