import {BaseServices} from "./base.services";
import axios from "axios";


export class AuthServices extends BaseServices {


    static getClassUrl() {
        return `${this.getUrl()}/TutenREST/rest/user/`;
    }

        static login(emailOrUsername, password, data) {
        const headers = {
            password: password,
            app: 'APP_BCK',
            'Content-Type': 'application/json'
        }
        return axios.put(`${this.getClassUrl()}${emailOrUsername}`, null, {headers})
            .then(resp => {
                return resp;
            })
            .catch(err => {
                return err;
            })
    }

}
