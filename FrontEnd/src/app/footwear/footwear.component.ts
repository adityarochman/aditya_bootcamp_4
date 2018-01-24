import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {

  productList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList(){

    let header = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: header })

    this.http.get("http://localhost:3003/api/product/footwear", options)
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {

      }
    );
  }
}
