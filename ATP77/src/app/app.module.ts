import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoClienteComponent } from './tipo-cliente/tipo-cliente.component';
import { ListagemTipoClienteComponent } from './listagem-tipo-cliente/listagem-tipo-cliente.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoClienteComponent,
    ListagemTipoClienteComponent,
    ListagemClientesComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
