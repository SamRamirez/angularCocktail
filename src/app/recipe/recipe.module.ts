import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './../recipe-detail/recipe-detail.component';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { RecipeService } from './../recipe.service';
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeAddComponent } from '../recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule, 
    FormsModule
    //RecipeComponent,
    //RecipesComponent
  ],
  declarations: [
    RecipeComponent, 
    RecipesComponent,
    RecipeDetailComponent,
    RecipeAddComponent
  ],
  exports: [
    //RecipeComponent,
    //RecipesComponent
  ],
  providers: [RecipeService]
})
export class RecipeModule { }
