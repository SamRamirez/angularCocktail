import { HeaderModule } from './header/header.module';
import { RecipeModule } from './recipe/recipe.module';
import { InMemoryDataService } from './in-memory-data.service';
//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HeaderComponent } from './header/header.component';
//import { RecipeComponent } from './recipe/recipe.component';
//import { RecipeService } from './recipe.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //RecipeComponent,
    //RecipesComponent
  ],
  imports: [
   // BrowserModule,
    HttpClientModule,
    //CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    HeaderModule,
    RecipeModule
  ],
  //providers: [RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
