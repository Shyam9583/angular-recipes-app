import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      "Apple Pie",
      "A simple apple pie recipe for quick morning",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg"),
    new Recipe(
      "Apple Pie",
      "A simple apple pie recipe for quick morning",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
