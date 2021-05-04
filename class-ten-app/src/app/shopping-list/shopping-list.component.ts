import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // ingredients: Ingredient[] = [
  // new Ingredient('Apples',5),
  // new Ingredient('Tomatoes', 2)
  // ];

  constructor(private shoppingListService: ShoppingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
