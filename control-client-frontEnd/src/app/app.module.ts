import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ClientsComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
