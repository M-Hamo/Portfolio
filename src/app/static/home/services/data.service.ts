import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
import { Skill } from "src/shared/utilities/interfaces";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private http: HttpClient) {}
  getImgs(projectName?: string): Observable<string> {
    return this.http.get(`../assets/projects/${projectName}/names.json`).pipe(
      filter((confirm) => !!confirm),
      map((json: any) =>
        json.img_names.map((img) => `assets/projects/${projectName}/${img}`)
      ),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

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
    name: "Express.js",
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
  {
    name: "Redux",
    icon: "assets/skills-icons/redux-original.svg",
    color: "#764abc",
  },
  {
    name: "Bootstrap",
    icon: "assets/skills-icons/bootstrap-original.svg",
    color: "#790af6",
  },
  {
    name: "Git",
    icon: "assets/skills-icons/git-original.svg",
    color: "#f34f29",
  },
  {
    name: "Github",
    icon: "assets/skills-icons/github-original.svg",
    color: "#181616",
  },
  {
    name: "Ionic",
    icon: "assets/skills-icons/ionic-original.svg",
    color: "#4e8ef7",
  },
  {
    name: "NPM",
    icon: "assets/skills-icons/npm-original-wordmark.svg",
    color: "#cb3837",
  },
  {
    name: "Photoshop",
    icon: "assets/skills-icons/photoshop-plain.svg",
    color: "#80b5e2",
  },
  {
    name: "Socketio",
    icon: "assets/skills-icons/socketio-original.svg",
    color: "#010101",
  },
  {
    name: "Algorithms",
    icon: "assets/skills-icons/thealgorithms-original.svg",
    color: "#00bcb4",
  },
  {
    name: "WordPress",
    icon: "assets/skills-icons/wordpress-plain.svg",
    color: "#494949",
  },

  {
    name: "Rxjs",
    icon: "assets/skills-icons/rxjs-1.svg",
    color: "#c0128e",
  },
  {
    name: "NGRX",
    icon: "assets/skills-icons/ngrx.svg",
    color: "#4b314f",
  },
  {
    name: "ES6",
    icon: "assets/skills-icons/es6.svg",
    color: "#f26522",
  },
  {
    name: "Problem Solving",
    icon: "assets/skills-icons/problem-solving.svg",
    color: "#393939",
  },
  {
    name: "Data Structures",
    icon: "assets/skills-icons/data-1.svg",
    color: "#70d463",
  },
  {
    name: "OOP",
    icon: "assets/skills-icons/gears-setup-svgrepo-com.svg",
    color: "#0052b4",
  },
  {
    name: "Angular Material",
    icon: "assets/skills-icons/angular-material-logo.svg",
    color: "#fb8c00",
  },
  {
    name: "PrimNg",
    icon: "assets/skills-icons/primeng-logo.png",
    color: "#b60229",
  },
  {
    name: "SCSS",
    icon: "assets/skills-icons/scss.png",
    color: "#7c8895",
  },
  {
    name: "Angular Animations",
    icon: "assets/skills-icons/angular.svg",
    color: "#c80b0b",
  },
  {
    name: "Restfull APIS",
    icon: "assets/skills-icons/api.png",
    color: "#ff4b00",
  },
  {
    name: "Agile",
    icon: "assets/skills-icons/2784065.png",
    color: "#b00020",
  },
];
