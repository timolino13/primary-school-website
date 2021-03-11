import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatematicaComponent } from './containers/matematica/matematica.component';
import { ConoscenzeGeneraliComponent } from './containers/conoscenze-generali/conoscenze-generali.component';
import { DivisioniComponent } from './components/matematica/divisioni/divisioni.component';
import { MisureLunghezzaComponent } from './components/conoscenzeGenerali/misure-lunghezza/misure-lunghezza.component';

@NgModule({
  declarations: [
    AppComponent,
    MatematicaComponent,
    ConoscenzeGeneraliComponent,
    DivisioniComponent,
    MisureLunghezzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
