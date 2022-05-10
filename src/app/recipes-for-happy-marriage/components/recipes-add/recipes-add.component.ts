import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from '../../service/recipe.service';



@Component({
  selector: 'app-recipes-add',
  templateUrl: './recipes-add.component.html',
  styleUrls: ['./recipes-add.component.scss']
})
export class RecipesAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private recipeApi: RecipeService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = new FormGroup({
      guestName: new FormControl('', [Validators.maxLength(100)]),
      iKnow: new FormControl('', [Validators.maxLength(100)]),
      whenIUnderstood: new FormControl('', [Validators.maxLength(500)]),
      memory: new FormControl('', [Validators.maxLength(500)]),
      expert: new FormControl('', [Validators.maxLength(500)]),
      honeymoon: new FormControl('', [Validators.maxLength(500)]),
      happyEverAfter: new FormControl('', [Validators.maxLength(500)]),
      afterYears: new FormControl('', [Validators.maxLength(500)]),
    });
  }

  get guestName() {
    return this.form.get('guestName');
  }

  get iKnow() {
    return this.form.get('iKnow');
  }

  get whenIUnderstood() {
    return this.form.get('whenIUnderstood');
  }

  get memory() {
    return this.form.get('memory');
  }

  get expert() {
    return this.form.get('expert');
  }

  get honeymoon() {
    return this.form.get('honeymoon');
  }

  get happyEverAfter() {
    return this.form.get('happyEverAfter');
  }

  get afterYears() {
    return this.form.get('afterYears');
  }

  ngOnInit(): void {
  }

  ResetForm() {
    this.form.reset();
  }

  onSubmit() {
    this.recipeApi.AddRecipe(this.form.value);
    this.toastr.success('Вашите координати бяха добавени успешно!');
    this.ResetForm();
    this.router.navigate(['/recipes-for-happy-marriage']);
  }
}
