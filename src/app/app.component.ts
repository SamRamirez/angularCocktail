import { mock_recipes } from './recipes.mock';
import { Recipe } from './model/recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/ {
  recipes: Recipe[] = mock_recipes;

  constructor(private recipeService: RecipeService) {}
  
  /* ngOnInit(): void {
    this.getRecipes();
    /*const recipe1 = new Recipe();
    recipe1.name = 'Ti\'Punch';
    recipe1.description = 'à boire lentement';
    
    const recipe2 = new Recipe();
    recipe2.name = 'Beer';
    recipe2.description = 'Tignes';

    let recipe3 = new Recipe();
    recipe3.name = 'pina colada';
    recipe3.description = 'Tignes aussi';

    this.recipes.push(recipe1);
    this.recipes.push(recipe2);
    this.recipes.push(recipe3);   fallait fin de comment ici
  }



  getRecipes(): void{
    this.recipeService.getRecipes().subscribe( recipes => 
      this.recipes = recipes, () => console.error("error"));
  } */

}
