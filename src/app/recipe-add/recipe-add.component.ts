import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipeAddFormGroup: FormGroup; /* = new FormGroup ({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    image: new FormControl()
  });*/
  newRecipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  submitMethod(): void{
    /*this.newRecipe.name = this.recipeAddFormGroup.get('name').value;
    this.newRecipe.description = this.recipeAddFormGroup.get('description').value;
    this.newRecipe.picture = this.recipeAddFormGroup.get('picture').value;*/
    
    const obj = this.recipeAddFormGroup.value;
    console.log(obj);
    let newRecipe2: Recipe;
    newRecipe2 = obj as Recipe; 
    console.log(newRecipe2);

    this.recipeService.addRecipe(obj).subscribe( () => this.router.navigate( ['recipes'] ));

    //this.recipeService.addRecipe(newRecipe2).subscribe( () => this.router.navigate( ['recipes'] ));
    //this.recipeService.addRecipe(this.newRecipe).subscribe( () => this.router.navigate( ['recipes'] ));

    //console.log(this.recipeAddFormGroup);
    //console.log(this.recipeAddFormGroup.get('name'));
  }

  createForm() {
    this.recipeAddFormGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      picture: []
    });
  }


}
