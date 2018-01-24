import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-denim',
  templateUrl: './denim.component.html',
  styleUrls: ['./denim.component.css']
})
export class DenimComponent implements OnInit {

  productList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList(){

    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get("http://localhost:3003/api/product/denim")
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {

      }
    );
  }
}
