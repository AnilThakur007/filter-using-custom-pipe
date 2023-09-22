import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    formGroup: any,
    sectionCode: any,
    keyCode: string,
    labelKeyName: string
  ): any {
    if (formGroup !== undefined) {
      if (formGroup.controls[sectionCode] !== undefined) {
        const filterResult = formGroup.controls[sectionCode].controls.filter(
          (x: any) => x.controls['SectionCode'].value === keyCode
        );
        if (filterResult.length > 0) {
          return filterResult[0].controls[labelKeyName].value;
        }
      }
    }
    return null;
  }
}
