import {BaseServices} from "./base.services";
import axios from "axios";

export class BookingServices extends BaseServices {

    static getClassUrl() {
        return `${this.getUrl()}/TutenREST/rest/user/`;
    }

    static getListBooking(data = null) {
        const email = data?.email != null ?  data.email : 'contacto@tuten.cl';
        const headers = {
            adminemail: JSON.parse(localStorage.getItem('email'))+'',
            token: JSON.parse(localStorage.getItem('token'))+'',
            app: 'APP_BCK',
            current: true,
            'Content-Type': 'application/json'
        }
        return axios.get(`${this.getClassUrl()}${email}/bookings`, {headers})
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                return [];
            })
    }

}
