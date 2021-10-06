import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "spliceString",
})
export class SpliceStringPipe implements PipeTransform {
  transform(input: string, number: number): string {
    let splicedString = "";
    let string = input.split(" ");

    let i = 0; 
    while (i !== number) {
      splicedString += `${string[i]} `;
      i += 1;
    }
    return splicedString;
  }
}
