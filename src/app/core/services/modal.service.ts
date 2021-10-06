import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/shared/components/confirm-dialog.component";


export type SnackBarVariant = "normal" | "success" | "error";

function _panelClass(variant: SnackBarVariant): string[] | undefined {
  return variant === "success"
    ? ["snack-success"]
    : variant === "error"
    ? ["snack-error"]
    : undefined;
}

@Injectable({ providedIn: "root" })
export class ModalService {
  constructor(
    private readonly _snackBar: MatSnackBar,
    private readonly _dialog: MatDialog
  ) {}

  snackbar(message: string, variant?: SnackBarVariant, duration = 5000): void {
    this._snackBar.open(message, "إغلاق", {
      direction: "rtl",
      duration,
      panelClass: _panelClass(variant),
    });
  }

  confirmDialog(message: string, title = "هل أنت متأكد !!"): Observable<boolean> {
    const ref = this._dialog.open(ConfirmDialogComponent, {
      data: { title: title, message },
      width: "500px",
      direction: "rtl",
      closeOnNavigation: true,
    });

    return ref.afterClosed();
  }


}
