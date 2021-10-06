import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InfiniteScrollService {
  loadMoreProductsSubject = new Subject<any>();

  constructor() {}

  onInfinite(): void {
    this.loadMoreProductsSubject.next();
  }
}
