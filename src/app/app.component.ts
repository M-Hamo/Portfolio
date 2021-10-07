import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
