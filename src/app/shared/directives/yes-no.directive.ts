import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appYesNo]'
})
export class YesNoDirective implements OnChanges {
  @Input() value = false;
  @Input() valueString = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    if (this.valueString) {
      this.el.nativeElement.classList.remove('text-success');
      this.el.nativeElement.classList.remove('text-danger');
      this.el.nativeElement.classList.remove('font-weight-bold');

      switch (this.valueString) {
        case 'unknown':
          this.el.nativeElement.innerText = 'Not available';
          break;

        case 'yes':
          this.el.nativeElement.innerText = 'Yes';
          this.el.nativeElement.classList.add('text-success');
          this.el.nativeElement.classList.add('font-weight-bold');
          break;

        case 'no':
        case '':
          this.el.nativeElement.innerText = 'No';
          this.el.nativeElement.classList.add('text-danger');
          this.el.nativeElement.classList.add('font-weight-bold');
          break;

        default:
          this.el.nativeElement.innerText = this.valueString;
          this.el.nativeElement.classList.add('font-weight-bold');
          break;
      }
    } else {
      this.el.nativeElement.innerText = this.value ? 'Yes' : 'No';
      this.el.nativeElement.classList.remove('text-success');
      this.el.nativeElement.classList.remove('text-danger');
      this.el.nativeElement.classList.add('font-weight-bold');

      this.el.nativeElement.classList.add(this.value ? 'text-success' : 'text-danger');
    }
  }
}
