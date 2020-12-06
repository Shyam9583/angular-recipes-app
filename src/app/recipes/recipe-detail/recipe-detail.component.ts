import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  isButtonToggled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleButton(): void {
    this.isButtonToggled = !this.isButtonToggled;
  }
}
