import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "subString",
})
export class SubString implements PipeTransform {
  transform(input: string, size: number): string {
    let substring = input.substr(0, size);
    if (size > input.length) {
      return substring + "";
    } else {
      return substring + "...";
    }
  }
}
