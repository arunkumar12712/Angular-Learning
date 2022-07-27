import { Recipe } from "./recipe.model";

export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('AA Test Recipe', 'This is simply aa test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

 getRecipes(){
  return this.recipes.slice();
 }

}
