import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  wow: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}
