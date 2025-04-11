import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperLevelSystemComponent } from './developer-level-system/developer-level-system.component';
import {FormBuilderModule} from "../form-builder/form-builder.module";
import {DeveloperLevelSystemRoutingModule} from "./developer-level-system-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DeveloperLevelSystemComponent
  ],
  imports: [
    CommonModule,
    FormBuilderModule,
    DeveloperLevelSystemRoutingModule,
    ReactiveFormsModule
  ]
})
export class DeveloperLevelSystemModule { }
