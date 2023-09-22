import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.itemsForm = new FormGroup({
      Section1: this.formBuilder.array([]),
      Section2: this.formBuilder.array([]),
    });
    const section1Array = this.itemsForm.controls['Section1'] as FormArray;
    section1Array.push(
      this.formBuilder.group({
        SectionCode: '1',
        IsBold: true,
        IsUnderLine: true,
        DisplayName: 'Invoice',
      })
    );
    section1Array.push(
      this.formBuilder.group({
        SectionCode: '2',
        IsBold: false,
        IsUnderLine: false,
        DisplayName: 'Tax',
      })
    );

    const section2Array = this.itemsForm.controls['Section2'] as FormArray;
    section2Array.push(
      this.formBuilder.group({
        SectionCode: ['3'],
        IsBold: true,
        IsUnderLine: true,
        DisplayName: 'Contact',
      })
    );
    section2Array.push(
      this.formBuilder.group({
        SectionCode: ['4'],
        IsBold: false,
        IsUnderLine: false,
        DisplayName: 'Company',
      })
    );
  }
}
