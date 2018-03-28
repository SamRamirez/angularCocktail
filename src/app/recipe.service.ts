import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { mock_recipes } from './recipes.mock';
import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {
  private recipeUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  /*getRecipes(): Observable<Recipe[]> {
    return of(mock_recipes);
  }*/

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipeById(id): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  addRecipe(recipe): Observable<any> {
    return this.http.post<any>(this.recipeUrl, recipe);
  }

  deleteRecipe(id): Observable<any> {
    return this.http.delete<any>(`${this.recipeUrl}/${id}`);
  }

}
