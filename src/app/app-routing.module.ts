import { ListaComponent } from './lista/lista.component';
import { PersonaComponent } from './form-persona/persona.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/Auth';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: PersonaComponent, canActivate: [AuthGuard]},
  {path: 'detalle/:id', component: DetallePersonaComponent, canActivate:[ AuthGuard] },
  {path: 'lista', component: ListaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
