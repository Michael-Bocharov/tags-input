import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from '@angular/forms';

export const validatorFn = (
  allowedTags: string[],
  errorMsg: string
): ValidatorFn => (control: AbstractControl): ValidationErrors =>
  allowedTags.includes(control.value) ? null : { tag: errorMsg };


@Directive({
  selector: '[appTagValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TagValidatorDirective,
      multi: true
    }
  ]
})

export class TagValidatorDirective {
  @Input()
  private allowedTags: string[];

  @Input()
  private errorMsg = 'not allowed';

  validate(control: AbstractControl): ValidationErrors {
    return validatorFn(this.allowedTags, this.errorMsg)(control);
  }

}
