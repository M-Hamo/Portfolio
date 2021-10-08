import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { _MatTableDataSource } from "@angular/material/table";
import { MenuItem } from "primeng/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Project, Skill } from "src/shared/utilities/interfaces";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  displayImages: boolean = false;
  preloader: boolean = true;
  socialButtons: MenuItem[];
  skills$: Observable<Skill[]> = this._data.getMySkills$;
  images: string[] = [];

  constructor(private _data: DataService) {}
  responsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  ngOnInit(): void {
    this.socialButtons = [
      {
        icon: "pi pi-home",
        command: () => {
          window.open("https://www.linkedin.com/in/mohamed-eldeeb-94a3b11a4/");
        },
      },
      {
        icon: "pi pi-send",
        command: () => {
          window.open(
            "http://m.me/MohamedXEldeeb"
          );
        },
      },
      {
        icon: "pi pi-google",
        command: () => {
          window.open("mailto:mohamed.eldeib5@gmail.com");
        },
      },
      {
        icon: "pi pi-phone",
        command: () => {
          window.open("https://wa.me/+201033898113");
        },
      },
      {
        icon: "pi pi-github",
        command: () => {
          window.open("https://github.com/M-Hamo", "_blank");
        },
      },
    ];
  }

  onShowProject(title?: string): void {
    title.includes("Claro Eg") &&
      this._data.getClaroImages$.pipe(tap((_) => (this.displayImages = true))).subscribe({
        next: (images) => {
          this.images = images;
          this.preloader = false;
        },
      });
  }

  scrollToElement($element): void {
    setTimeout(() => {
      $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 200);
  }

  projects: Project[] = [
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
  ];
}
