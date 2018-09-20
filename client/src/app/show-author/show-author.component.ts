import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HttpService} from "../http.service";
@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  author:any = {};
  constructor(private _httpService:HttpService, private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      console.log(params)
      let obs = this._httpService.oneAuthor(params.author_id)
      obs.subscribe(data=>{
        this.author = data;
      })
    })
  }
  vote(quote_id, num){
    let obs = this._httpService.updateQuote(quote_id, num);
    obs.subscribe(data=>{
      this.author = data;
    })
  }
  delete(quote_id){
    let obs = this._httpService.deleteQuote(quote_id);
    obs.subscribe(data=>{
      console.log(data)
      this.author=data;
    })
  }

}
