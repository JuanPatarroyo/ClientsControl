import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UpdateComponent } from './components/update/update.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfigurationGuard } from './guards/configuration.guard';

const routes: Routes =[
  {path: '', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [ConfigurationGuard]},
  {path: 'configuration', component: ConfigurationComponent, canActivate: [AuthGuard]},
  {path: 'client/update/:id', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
