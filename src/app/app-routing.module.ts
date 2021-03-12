import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoltiplicazioniDueCifreComponent} from './components/matematica/moltiplicazioni-due-cifre/moltiplicazioni-due-cifre.component';
import {HomeComponent} from './containers/home/home.component';
import {CalcoliVirgolaComponent} from './components/matematica/calcoli-virgola/calcoli-virgola.component';
import {DivisioniComponent} from './components/matematica/divisioni/divisioni.component';
import {FrazioniComponent} from './components/matematica/frazioni/frazioni.component';
import {MoltiplicazioniVirgolaComponent} from './components/matematica/moltiplicazioni-virgola/moltiplicazioni-virgola.component';
import {PiuMenoComponent} from './components/matematica/piu-meno/piu-meno.component';
import {LeggereOrologioComponent} from './components/conoscenzeGenerali/leggere-orologio/leggere-orologio.component';
import {MisureLunghezzaComponent} from './components/conoscenzeGenerali/misure-lunghezza/misure-lunghezza.component';
import {MisurePesoComponent} from './components/conoscenzeGenerali/misure-peso/misure-peso.component';
import {RiconoscereSoldiComponent} from './components/conoscenzeGenerali/riconoscere-soldi/riconoscere-soldi.component';
import {MatematicaComponent} from './containers/matematica/matematica.component';
import {ConoscenzeGeneraliComponent} from './containers/conoscenze-generali/conoscenze-generali.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'matematica', component: MatematicaComponent},
  {path: 'matematica/calcoli-virgola', component: CalcoliVirgolaComponent},
  {path: 'matematica/divisioni', component: DivisioniComponent},
  {path: 'matematica/frazioni', component: FrazioniComponent},
  {path: 'matematica/moltiplicazioni-due-cifre', component: MoltiplicazioniDueCifreComponent},
  {path: 'matematica/moltiplicazioni-virgola', component: MoltiplicazioniVirgolaComponent},
  {path: 'matematica/piu-meno', component: PiuMenoComponent},
  {path: 'conoscenzeGenerali', component: ConoscenzeGeneraliComponent},
  {path: 'conoscenzeGenerali/leggere-orologio', component: LeggereOrologioComponent},
  {path: 'conoscenzeGenerali/misure-lunghezza', component: MisureLunghezzaComponent},
  {path: 'conoscenzeGenerali/misure-peso', component: MisurePesoComponent},
  {path: 'conoscenzeGenerali/riconoscere-soldi', component: RiconoscereSoldiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
