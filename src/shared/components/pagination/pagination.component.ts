import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Output() pageIndex = new EventEmitter();
  counter: number = 1;
  constructor() {}

  ngOnInit(): void {}

  smallBtn(num: number): void {
    this.counter = num;
    this.pageIndex.next(this.counter);
  }

  nextBtn(): void {
    this.counter++;
    this.pageIndex.next(this.counter);
  }
  previousBtn(): void {
    if (this.counter >1) {
      this.counter--;
      this.pageIndex.next(this.counter);
    }
  }

  lgBtnValues = [
    {
      val: 1,
    },
    {
      val: 2,
    },
    {
      val: 3,
    },
    {
      val: 4,
    },
    {
      val: 5,
    },
    {
      val: 6,
    },
    {
      val: 7,
    },
    {
      val: 8,
    },
    {
      val: 9,
    },
    {
      val: 10,
    },
  ];

  smBtnValues=[
    {
      val: 1,
    },
    {
      val: 2,
    },
    {
      val: 3,
    },
    {
      val: 4,
    },
    {
      val: 5,
    },
   
  ];
}
