import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DeudasComponent } from './pages/deudas/deudas.component';

const routes: Routes = [
  {path:"pages/clientes", component: ClientesComponent},
  {path:"pages/deudas", component: DeudasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
