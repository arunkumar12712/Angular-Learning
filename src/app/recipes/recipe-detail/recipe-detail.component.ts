import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe = {} as Recipe
  id : number = 0;
  constructor(private recipeService:RecipeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id = +param['id']
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
