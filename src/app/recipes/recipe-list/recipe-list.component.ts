import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Apple Pie', 'Apples baked in pie crust', 'https://images-gmi-pmc.edge-generalmills.com/597526e8-69bf-45a2-9b3c-772507d77087.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
