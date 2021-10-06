import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "casedName",
})
export class CasedNamePipe implements PipeTransform {
  transform(input: string): string {
    const trim = input.trim();
    const words = trim.split(" ");
    const casedWords = words.map((word) => word[0].toLocaleUpperCase() + word.slice(1));
    if (words.length === 1) {
      return casedWords[0];
    }
    return casedWords[0] + " " + casedWords[casedWords.length - 1];
  }
}
