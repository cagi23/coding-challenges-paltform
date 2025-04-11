import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'XXX',
        loadChildren: () => import('./modules/developer-level-system/developer-level-system.module').then((m) => m.DeveloperLevelSystemModule),
      },
      {
        path: 'developer-level-system',
        data: { breadcrumb: { skip: true } },
        loadChildren: () => import('./modules/developer-level-system/developer-level-system.module').then((m) => m.DeveloperLevelSystemModule),
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
