import {Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Users } from '../../models/users'


@Injectable()
export class UserService{
    private _usersUrl = "http://localhost:4001/users"

    constructor(private _http:HttpClient){}

    getUserList()
    {
        return this._http.get(this._usersUrl)
    }
    addUser(user:Users)
    {
        return this._http.post(this._usersUrl,user)
    }
    getUser(user:any){
        return this._http.get(this._usersUrl+`/${user}`)
    }
}
