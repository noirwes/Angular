import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  countries: any = [];

  constructor(private _http: HttpService) { }



  ngOnInit(): void {

    this._http.getList().subscribe(data => {

      console.log("Hello");
      this.countries = data;
      console.log(this.countries);
    });

  }

}
