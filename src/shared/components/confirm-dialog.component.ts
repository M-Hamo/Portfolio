import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface IDialogContent {
  /** Dialog title. */
  readonly title: string;
  /** Dialog message - can contain markup. */
  readonly message: string;
}

@Component({
  template: `
    <h1 mat-dialog-title class="text-end text-gray-800" fxLayoutAlign="start center">
      <mat-icon style="width:30px; height:30px; font-size:30px; color:orange"
        >notification_important</mat-icon
      >
      {{ data.title }}
    </h1>

    <div
      mat-dialog-content
      class="m-y-8 h-t-18"
      style="min-height: 40px;"
      [innerHTML]="data.message"
    ></div>

    <div mat-dialog-actions>
      <button mat-flat-button color="warn" [mat-dialog-close]="true" aria-label="Ok">
        موافق
      </button>
      <button mat-flat-button [mat-dialog-close]="false" aria-label="Cancel">
        الغاء
      </button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: IDialogContent) {}
}
