import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class updateService{
    constructor(public http : HttpClient){}
    public updateData(obj:any):Observable<any>{
        return this.http.put("http://localhost:8080/update",obj);
    }
}