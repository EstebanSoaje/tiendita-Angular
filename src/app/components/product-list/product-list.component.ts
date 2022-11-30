import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  public products = [
    { id: 1, name: 'pendrive', precio: 1000, description: "8gb"},
    { id: 2, name: 'fuente', precio: 4000, description: "Atx 500w"},
    { id: 3, name: 'antena Wifi', precio: 2000},
    { id: 4, name: 'Mouse', precio: 1500}
  ];

  public titulo = "Productos Tecnologicos";
}

