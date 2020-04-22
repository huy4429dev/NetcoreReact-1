
import * as types from './../constants/user';

export default function callApi(endpoint, method, body=""){

        return fetch(`${types.API_ENDPOINT}/${endpoint}`,{
            method: method,
            body:body
        })

}
