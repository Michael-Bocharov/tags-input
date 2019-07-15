import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TagInputComponent)
    }
  ],
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  value = '';

  writeValue(value: string): void {
    if (value) {
      this.onChange(value);
    }
  }

  propagateChange: any = () => {};

  onChange(value) {
    this.value = value.replace();
    this.propagateChange(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  onTouched: any = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }
}
