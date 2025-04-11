import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {FormlyModule} from "@ngx-formly/core";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  exports: [FormlyModule]
})
export class FormBuilderModule { }
