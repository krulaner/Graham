import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author:any = {}
  quote:any = {}
  constructor(private _httpService:HttpService, private _router:Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      let obs = this._httpService.oneAuthor(params['author_id'])
      obs.subscribe(data=>{
        this.author=data;
        this.quote = {
          content:"",
          author_id:this.author._id
        }
      })
    })
  }
  onSubmit(){
    let obs = this._httpService.createQuote(this.quote)
    obs.subscribe(data=>{
      console.log(data)
      if('errors' in data){
        console.log('do this later')
      }
      else{
        this._router.navigate(['/authors/'+this.author._id])
      }
    })
  }

}
