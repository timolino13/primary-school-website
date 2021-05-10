import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatematicaComponent} from './containers/matematica.component';
import {CalcoliVirgolaComponent} from './components/calcoli-virgola/calcoli-virgola.component';
import {DivisioniComponent} from './components/divisioni/divisioni.component';
import {FrazioniComponent} from './components/frazioni/frazioni.component';
import {MoltiplicazioniDueCifreComponent} from './components/moltiplicazioni-due-cifre/moltiplicazioni-due-cifre.component';
import {MoltiplicazioniVirgolaComponent} from './components/moltiplicazioni-virgola/moltiplicazioni-virgola.component';
import {PiuMenoComponent} from './components/piu-meno/piu-meno.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [
    MatematicaComponent,
    CalcoliVirgolaComponent,
    DivisioniComponent,
    FrazioniComponent,
    MoltiplicazioniDueCifreComponent,
    MoltiplicazioniVirgolaComponent,
    PiuMenoComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class MatematicaModule { }
