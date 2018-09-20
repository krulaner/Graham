import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author;
  constructor(private _httpService:HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.author = {
      name:""
    }
    this._route.params.subscribe((params:Params)=>{
      console.log(params)
    })
  }
  onSubmit(){
    console.log("author form submitted");
    let obs = this._httpService.createAuthor(this.author);
    obs.subscribe(data=>{
      console.log(data);
      if("errors" in data){
        console.log(data['errors'])
      }
      else{
        this._router.navigate(['/'])
      }
    })
  }

}
