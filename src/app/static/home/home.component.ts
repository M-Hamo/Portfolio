import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { _MatTableDataSource } from "@angular/material/table";
import { MenuItem } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { fade } from "src/shared/animations/fade";
import { Project, Skill } from "src/shared/utilities/interfaces";
import Typed from "typed.js";
import { DataService } from "./services/data.service";
import { Projects, ResponsiveOptions, SocialButtons } from "./utils/home.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [fade],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private readonly _data: DataService) {}

  private _unsubscribeAll$: Subject<boolean> = new Subject();

  public displayImages: boolean = false;
  public preloader: boolean = true;
  public toTop: boolean = false;

  public skills$: Observable<Skill[]> = this._data.getMySkills$;
  images: string[] = [];

  public responsiveOptions = ResponsiveOptions;

  public socialButtons: MenuItem[] = SocialButtons;

  public projects: Project[] = Projects;

  public ngOnInit(): void {
    this.title();
  }

  public title(): void {
    const options = {
      strings: [
        "Mohamed Eldeeb.",
        "a Software developer.",
        "Web development specialist.",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: "☠️",
      loop: true,
    };

    new Typed(".typed-element", options);
  }

  public onShowProject(title?: string): void {
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

  public scrollToElement($element): void {
    setTimeout(() => {
      $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 100);
  }

  @HostListener("window:scroll", ["$event"])
  track(event) {
    this.toTop = window.pageYOffset >= 500 ? true : false;
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll$.next(true);
    this._unsubscribeAll$.complete();
  }
}
