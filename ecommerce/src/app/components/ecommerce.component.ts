import { Component, OnInit } from "@angular/core";
import { FetchService } from "../services/fetch.service";
import { InsertService } from "../services/insert.service";
import { updateService } from "../services/update.service";
import { DeleteService } from "../services/delete.service";
import { HttpErrorResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

declare var $:any;

@Component({
    selector:'ecommerce',
    templateUrl:"ecommerce.component.html",
    styleUrls:['ecommerce.component.css']
})
export class ecommerceComponent implements OnInit{
    public record:any;
    public image;
    constructor(public fetch:FetchService,
                public insert:InsertService,
                public update:updateService,
                public remove: DeleteService,
                public http:HttpClient){}
    public _errorcallback = (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
            console.log("Client side    error");
        }
        else{
            console.log("server side error");
        }
    }
ngOnInit(){

}
selectedImage(event){
    if(event.target.files.length>0){
        const file = event.target.files;
        this.image = file;
    }
}
onSubmit(){
let obj = {
    "p_id":$('#p_id').val(),
    "p_name":$('#p_name').val()

}
this.insert.insertData(obj).subscribe((posRes)=>{
    if(posRes.insert ==="success"){
        this.record.push(obj);
    }
},this._errorcallback);
}
}