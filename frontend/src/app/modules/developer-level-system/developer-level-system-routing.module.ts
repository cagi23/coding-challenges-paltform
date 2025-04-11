import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeveloperLevelSystemComponent} from "./developer-level-system/developer-level-system.component";


const routes: Routes = [
  {
    path: '',
    component: DeveloperLevelSystemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperLevelSystemRoutingModule { }
