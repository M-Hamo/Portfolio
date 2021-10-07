import { Component, OnInit } from "@angular/core";
import { Project, Skill } from "src/shared/utilities/interfaces";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}



  ngOnInit(): void {

  }
  skills: Skill[] = [
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
  projects: Project[] = [
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
    {
      img: "assets/projects/Claro Eg/promo.png",
      title: "Claro Eg",
      details:
        "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
    },
  ];
}
