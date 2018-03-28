import { RecipeService } from './../recipe.service';
import { Recipe } from './../model/recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent /*implements OnInit */{

 @Input() recipe: Recipe;

 isExpanded = false;
 toggleExpand(): void{
  this.isExpanded = !this.isExpanded;
  console.log('Expanded : ' + this.isExpanded);
 }

 
  
}
