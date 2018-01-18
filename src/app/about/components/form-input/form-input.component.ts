import { Input, Output, ViewChild, EventEmitter, Component, ChangeDetectorRef, ElementRef } from '@angular/core';

@Component({
    selector: 'form-input',
    styleUrls: ['./form-input.component.scss'],
    template: `<input #inputField [ngModel]="inputField" class="form-input"/>`
})
export class FormInputComponent {
    @ViewChild('inputField') inputElement: ElementRef;


    @Input() inputField: string;
    @Output() inputFieldChange = new EventEmitter<string>();

    constructor(public cd: ChangeDetectorRef) {
        this.cd.detach();
    }

    checkInputValue() {
        if (this.inputElement.nativeElement.value !== this.inputField) {
            console.log('ngDoCheck expression gone , input val: ', this.inputElement.nativeElement.value, arguments);
            setTimeout(() => this.inputFieldChange.emit(this.inputElement.nativeElement.value), 0);
        }
    }

    ngDoCheck() {
        console.log('ngDoCheck');
        this.checkInputValue();
    }

}
