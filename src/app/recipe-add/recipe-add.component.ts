import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  newRecipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  submitMethod(): void{
    this.recipeService.addRecipe(this.newRecipe).subscribe( () => this.router.navigate( ['recipes'] ));
  }

}
