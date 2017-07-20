import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Apple Pie',
          'Apples baked in pie crust',
          'https://images-gmi-pmc.edge-generalmills.com/597526e8-69bf-45a2-9b3c-772507d77087.jpg'
      ),
      new Recipe('Pumkin Pie',
          'Processed pumkin baked in pie crust',
          'https://images-gmi-pmc.edge-generalmills.com/db388a54-759d-4c6b-a787-44767d29273e.jpg'

      ),
      new Recipe('Pecan Pie',
          'Sweet pie filling with whole pecans',
          'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/d/2000/decadent-chocolate-pecan-pie.ashx?vd=20170302T170601Z&ir=1&width=2000&height=1125&crop=auto&quality=75&hash=66C52C9733C33A2DA3C828138F472BDC8C715499'
      )
  ];

  constructor() { }

  ngOnInit() {
  }

}
