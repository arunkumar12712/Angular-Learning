import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

 public recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
      new Ingredient('Meat', 1),
      new Ingredient('Apple', 2)
    ]),
    new Recipe('AA Test Recipe', 'This is simply aa test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Rice', 2),
      new Ingredient('Fish', 2)
    ])
  ];

  constructor(private slService:ShoppingListService){

  }

 getRecipes(){
  return this.recipes.slice();
 }

 addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
 }
}
