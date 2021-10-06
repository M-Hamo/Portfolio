import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "percentage",
})
export class PercentagePipe implements PipeTransform {
  transform(price: number, selling: number): number {
    const sale = ((price - selling) / price) * 100 + 0.5;
    return sale > 0 ? Math.round(sale) : 0;
  }
}
