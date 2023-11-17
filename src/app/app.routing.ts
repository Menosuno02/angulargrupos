import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GruposComponent } from './components/grupos/grupos.component';
import { CreatealumnoComponent } from './components/createalumno/createalumno.component';

const routes: Routes = [
  {
    path: '',
    component: GruposComponent,
  },
  {
    path: 'create',
    component: CreatealumnoComponent,
  },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
