import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init();
  }

  // //preload Three-dots
  ngAfterViewInit(): void {
    this._hidePreloader();
  }

  private _hidePreloader(): void {
    const el = document.getElementById("globalLoader");
    if (el) {
      el.addEventListener("transitionend", () => {
        el.style.display = "none";
      });

      if (!el.className.includes("global-loader-hidden")) {
        el.style.display = "none";
      }
    }
  }
}
