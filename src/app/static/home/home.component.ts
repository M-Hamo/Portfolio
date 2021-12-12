import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { _MatTableDataSource } from "@angular/material/table";
import { MenuItem } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { fade } from "src/shared/animations/fade";
import { Project, Skill } from "src/shared/utilities/interfaces";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [fade],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private readonly _data: DataService) {}

  private _unsubscribeAll$: Subject<boolean> = new Subject();

  displayImages: boolean = false;
  preloader: boolean = true;
  toTop: boolean = false;

  skills$: Observable<Skill[]> = this._data.getMySkills$;
  images: string[] = [];

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

  socialButtons: MenuItem[] = [
    {
      icon: "pi pi-home",
      command: () => {
        window.open("https://www.linkedin.com/in/mohamed-eldeeb-94a3b11a4/");
      },
    },
    {
      icon: "pi pi-send",
      command: () => {
        window.open("http://m.me/MohamedXEldeeb");
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

  projects: Project[] = [
    {
      title: "Claro Eg",
      img: "assets/projects/Claro Eg/promo.png",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
    {
      title: "Hatly Wadely",
      img: "assets/projects/Hatly Wadely/promo.png",
      details:
        "Hatly wadely is a Delivery service and market site for selling products and delivering orders to homes.",
    },
    {
      title: "Academic archive",
      img: "assets/projects/Academic archive/promo.png",
      details: "Academic archive is a website for archiving files on server storage.",
    },
  ];

  ngOnInit(): void {}

  onShowProject(title?: string): void {
    title.includes(title) &&
      this._data
        .getImgs(title)
        .pipe(
          takeUntil(this._unsubscribeAll$),
          tap((images: any) => {
            this.images = images;
            this.displayImages = true;
          })
        )
        .subscribe((_) => {
          this.preloader = false;
        });
  }

  scrollToElement($element): void {
    setTimeout(() => {
      $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 100);
  }

  @HostListener("window:scroll", ["$event"])
  track(event) {
    this.toTop = window.pageYOffset >= 500 ? true : false;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next(true);
    this._unsubscribeAll$.complete();
  }
}
