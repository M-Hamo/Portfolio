import { animate, state, style, transition, trigger } from "@angular/animations";

export const fade = trigger("fade", [
  state("void", style({ opacity: 0, transform: "translateX(20px)" })),
  transition(":enter, :leave", [animate("300ms ease-out")]),
]);
