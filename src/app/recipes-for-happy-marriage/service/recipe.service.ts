import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { recipePath } from '../../constants/paths.constant';
import { RecipeForHappyMarriage } from 'src/app/models/recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipesRef: AngularFireList<any>;
    recipeRef: AngularFireObject<any>;

    constructor(private firestore: AngularFireDatabase) {
        this.recipesRef = this.firestore.list(recipePath);
        this.recipeRef = this.firestore.object(recipePath);
    }

    AddRecipe(recipe: RecipeForHappyMarriage) {
        this.recipesRef.push({
            guestName: recipe.guestName,
            iKnow: recipe.iKnow,
            whenIUnderstood: recipe.whenIUnderstood,
            memory: recipe.memory,
            expert: recipe.expert,
            honeymoon: recipe.honeymoon,
            happyEverAfter: recipe.happyEverAfter,
            afterYears: recipe.afterYears
        });
    }

    GetRecipe(id: string) {
        this.recipeRef = this.firestore.object(`${recipePath}/${id}`);
        return this.recipeRef;
    }

    GetRecipesList() {
        return this.recipesRef;
    }

    UpdateRecipe(recipe: RecipeForHappyMarriage) {
        this.recipeRef.update({
            guestName: recipe.guestName,
            iKnow: recipe.iKnow,
            whenIUnderstood: recipe.whenIUnderstood,
            expert: recipe.expert,
            honeymoon: recipe.honeymoon,
            happyEverAfter: recipe.happyEverAfter,
            afterYears: recipe.afterYears
        });
    }

    DeleteRecipe(id: string) {
        this.recipeRef = this.firestore.object(`${recipePath}/${id}`);
        this.recipeRef.remove();
    }
}