import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-social-floating",
  template: `
    <div
      class="floating-container"
      fxHide.lt-md
      fxLayout="row wrap"
      fxLayoutAlign="center center"
    >
      <div
        fxFlex="100"
        [ngClass]="{
          'floating-social-hide': toggleFloating === !false
        }"
        class="floating-social-visible"
        fxLayout="row wrap"
        fxLayoutAlign="center center"
      >
        <a
          class="icon"
          style="background-color: rgb(87, 87, 255)"
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          href="https://www.facebook.com/wadilyKomHamada/?view_public_for=100931745289342"
          target="_blank"
          ><i fxFlexAlign="stretch" class="fab fa-facebook-f"></i
        ></a>
        <a
          class="icon"
          style="background-color: rgb(18 176 255)"
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          href="https://twitter.com/hatlywwadely?s=08"
          target="_blank"
          ><i fxFlexAlign="stretch" class="fab fa-twitter"></i
        ></a>
        <a
          class="icon"
          style="background-color: #00b000"
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          href="https://wa.me/+201063201017"
          target="_blank"
          ><i fxFlexAlign="stretch" class="fab fa-whatsapp"></i
        ></a>
        <a
          class="icon"
          style="
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 0%,
              #fdf497 5%,
              #fd5949 45%,
              #d6249f 60%,
              #285aeb 90%
            );
          "
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          href="https://www.instagram.com/hatly_9_wadily?r=nametag"
          target="_blank"
          ><i fxFlexAlign="stretch" class="fab fa-instagram"></i
        ></a>
        <!-- <a
          class="icon"
          style="background-color: rgb(250, 40, 40)"
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          href="hatlywwadely@gmail.com"
          target="_blank"
          ><i fxFlexAlign="stretch" class="fab fa-google-plus-g"></i
        ></a> -->
      </div>
      <div
        fxFlex="100"
        class="toggleFloatingSocial"
        fxLayout="row wrap"
        fxLayoutAlign="center center"
      >
        <button
          class="toggle-social"
          fxFlex="100"
          fxLayout="row wrap"
          fxLayoutAlign="center center"
          (click)="toggleFloating = !toggleFloating"
        >
          <i *ngIf="toggleFloating === false" class="fad fa-chevron-double-left"></i>
          <i *ngIf="toggleFloating === true" class="fad fa-chevron-double-right"></i>
        </button>
      </div>
    </div>
  `,
})
export class SocialMediaFloatingComponent implements OnInit {
  // toggle floating social
  toggleFloating = false;
  constructor() {}

  ngOnInit(): void {
    const url = window.location.href;
    url.includes("contacts")
      ? (this.toggleFloating = true)
      : (this.toggleFloating = false);
  }
}
