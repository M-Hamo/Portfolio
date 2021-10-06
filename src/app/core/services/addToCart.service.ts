import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  addCartSubject = new Subject<boolean>();

  constructor() {}

  onChange(val?): void {
    this.addCartSubject.next(val);
  }
}
