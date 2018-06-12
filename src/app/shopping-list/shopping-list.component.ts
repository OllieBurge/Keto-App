import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients = [];
  constructor() { }

  ngOnInit() {
  }

}
class ingredients {
  public name: string;
  public amount: number;
  constructor(name: string, amount: number){
    this.name = name;
    this.amount = amount;
  }
}
