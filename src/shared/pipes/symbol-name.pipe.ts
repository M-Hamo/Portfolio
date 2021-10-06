import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "symbolName",
})
export class SymbolNamePipe implements PipeTransform {
  transform(input: string): string {
    const trim = input.trim();
    const words = trim.split(" ");
    const symbol = words.map((word) => word[0]);
    const casedSymbol = symbol.map((s) => s.toLocaleUpperCase());
    if (words.length === 1) {
      return casedSymbol[0];
    }
    return casedSymbol[0] + casedSymbol[casedSymbol.length - 1];
  }
}
