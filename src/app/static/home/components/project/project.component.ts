import { Component, Input, OnInit } from "@angular/core";
import { Project } from "src/shared/utilities/interfaces";


@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  @Input() proj: Project;
  constructor() {}

  ngOnInit(): void {}
}
