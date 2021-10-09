import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Project } from "src/shared/utilities/interfaces";
import { DataService } from "../../services/data.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  @Input() proj: Project;
  @Output() showImages = new EventEmitter();
  constructor(private _data: DataService, public _imgDialog: MatDialog) {}

  ngOnInit(): void {}

  onShowProject(title?: string): void {
    this.showImages.next(title);
  }
}
