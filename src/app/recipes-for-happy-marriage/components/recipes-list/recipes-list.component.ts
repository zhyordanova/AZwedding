import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

import { RecipeForHappyMarriage } from 'src/app/models/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  Recipes?: RecipeForHappyMarriage[];

  constructor(private recipeApi: RecipeService,) { }

  ngOnInit(): void {
    this.recipeApi.GetRecipesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() }),
        )
      )
    ).subscribe(data => {
      this.Recipes = data;
    });
  }
}
