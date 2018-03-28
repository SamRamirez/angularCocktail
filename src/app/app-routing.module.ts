import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from  './recipe-add/recipe-add.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipesComponent,
      pathMatch: 'full'
  },
  {
    path: 'addRecipes',
    component: RecipeAddComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];

@NgModule({
  exports: [
    RouterModule
  ], 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
