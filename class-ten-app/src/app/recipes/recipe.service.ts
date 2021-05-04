import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chorizo & mozzarella gnocchi bake',
      'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
      'https://tinyurl.com/5tmjt4st'),
    new Recipe('Baked Tomato Gnocchi',
      'This delicious looking dish is perfect for any evening meal. It can be made in under 30 minutes and there is enough to feed the family and friends.It has all the tastes of a pizza but you won’t feel guilty after eating it.',
      'https://tinyurl.com/5tmjt4st')
  ];

  getRecipes() {
    return this.recipes.slice(); //to get new copy
  }
}