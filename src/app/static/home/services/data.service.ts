import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Skill } from "src/shared/utilities/interfaces";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private http: HttpClient) {}

  getClaroImages$ = this.http.get("../assets/projects/Claro Eg/names.json").pipe(
    filter((confirm) => !!confirm),
    map((json: any) => json.img_names.map((img) => `assets/projects/Claro Eg/${img}`))
  );
  getMySkills$ = of(Skills).pipe(filter((confirm) => !!confirm));
}
const Skills: Skill[] = [
  {
    name: "Angular",
    icon: "assets/skills-icons/angular.svg",
    color: "#c80b0b",
  },
  {
    name: "Node.js",
    icon: "assets/skills-icons/nodejs.svg",
    color: "rgb(64, 65, 55)",
  },
  {
    name: "Express",
    icon: "assets/skills-icons/express.svg",
    color: "#413434",
  },
  {
    name: "MongoDB",
    icon: "assets/skills-icons/mongodb.svg",
    color: "rgb(79, 55, 43)",
  },
  {
    name: "JavaScript",
    icon: "assets/skills-icons/javascript.svg",
    color: "rgb(240, 219, 79)",
  },
  {
    name: "TypeScript",
    icon: "assets/skills-icons/typescript.svg",
    color: "#045992",
  },
  {
    name: "HTML",
    icon: "assets/skills-icons/html5-original.svg",
    color: "#de4000",
  },
  {
    name: "CSS",
    icon: "assets/skills-icons/css3-original.svg",
    color: "#006b9a",
  },
  {
    name: "Sass",
    icon: "assets/skills-icons/sass-original.svg",
    color: "rgb(203, 102, 153)",
  },
];
