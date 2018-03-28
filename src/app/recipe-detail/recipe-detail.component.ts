import { RecipeService } from './../recipe.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this.recipeService.getRecipeById(id).subscribe( recipe =>
      this.recipe = recipe, () => console.error("error") );
  }

  delete(): void{
    this.recipeService.deleteRecipe(this.recipe.id)
    .subscribe(() => {
      console.log('OK');
      this.router.navigate( ['recipes'] );
    },
   error => console.error('erroooooooor', error));
  }

}
