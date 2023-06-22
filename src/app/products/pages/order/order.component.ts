import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

interface Product {
  code: string
  name: string
  category: string
  quantity: number
}

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public isUpperCase: boolean = false
  public orderBy?: keyof Hero
  public products!: Product[];
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ];

  ngOnInit(): void {
    this.products = [
      {
        code: 'a',
        name: 'product a',
        category: 'z',
        quantity: 5
      },
      {
        code: 'b',
        name: 'product b',
        category: 'z',
        quantity: 5
      },
      {
        code: 'c',
        name: 'product c',
        category: 'z',
        quantity: 5
      },
      {
        code: 'd',
        name: 'product d',
        category: 'z',
        quantity: 5
      },
    ]
  }

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder( value: keyof Hero ) {
    this.orderBy = value
  }
}
