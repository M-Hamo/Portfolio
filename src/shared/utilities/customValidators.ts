import { ValidatorFn, FormGroup } from "@angular/forms";

export function MatchValidator(
  controlName: string,
  matchingControlName: string,
  errorName = "isMatch"
): ValidatorFn {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return null;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ [errorName]: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
