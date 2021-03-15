import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatematicaComponent } from './containers/matematica/matematica.component';
import { ConoscenzeGeneraliComponent } from './containers/conoscenze-generali/conoscenze-generali.component';
import { DivisioniComponent } from './components/matematica/divisioni/divisioni.component';
import { MisureLunghezzaComponent } from './components/conoscenzeGenerali/misure-lunghezza/misure-lunghezza.component';
import { LeggereOrologioComponent } from './components/conoscenzeGenerali/leggere-orologio/leggere-orologio.component';
import { MisurePesoComponent } from './components/conoscenzeGenerali/misure-peso/misure-peso.component';
import { RiconoscereFotoComponent } from './components/conoscenzeGenerali/riconoscere-foto/riconoscere-foto.component';
import { PiuMenoComponent } from './components/matematica/piu-meno/piu-meno.component';
import { MoltiplicazioniDueCifreComponent } from './components/matematica/moltiplicazioni-due-cifre/moltiplicazioni-due-cifre.component';
import { MoltiplicazioniVirgolaComponent } from './components/matematica/moltiplicazioni-virgola/moltiplicazioni-virgola.component';
import { CalcoliVirgolaComponent } from './components/matematica/calcoli-virgola/calcoli-virgola.component';
import { FrazioniComponent } from './components/matematica/frazioni/frazioni.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MatematicaComponent,
    ConoscenzeGeneraliComponent,
    DivisioniComponent,
    MisureLunghezzaComponent,
    LeggereOrologioComponent,
    MisurePesoComponent,
    RiconoscereFotoComponent,
    PiuMenoComponent,
    MoltiplicazioniDueCifreComponent,
    MoltiplicazioniVirgolaComponent,
    CalcoliVirgolaComponent,
    HomeComponent,
    FrazioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
