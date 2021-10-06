import { Component, OnInit } from "@angular/core";

@Component({
  selector: "btn-preloader",
  template: ` <div class="lds-dual-ring"></div> `,
  styles: [
    `
      /*button preloader for components*/
      .lds-dual-ring {
        display: inline-block;
        width: 38px;
        height: 38px;
      }
      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 28px;
        height: 28px;
        margin:12px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring .5s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class ButtonPreloaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
