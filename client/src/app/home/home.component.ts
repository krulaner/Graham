import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author_list:any = [];
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    let obs = this._httpService.allAuthors();
    obs.subscribe(data=>{
      this.author_list = data;
    })
  }

}
