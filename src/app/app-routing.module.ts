import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/containers/home.component';
import {MatematicaComponent} from './matematica/containers/matematica.component';
import {CalcoliVirgolaComponent} from './matematica/components/calcoli-virgola/calcoli-virgola.component';
import {DivisioniComponent} from './matematica/components/divisioni/divisioni.component';
import {FrazioniComponent} from './matematica/components/frazioni/frazioni.component';
import {MoltiplicazioniDueCifreComponent} from './matematica/components/moltiplicazioni-due-cifre/moltiplicazioni-due-cifre.component';
import {MoltiplicazioniVirgolaComponent} from './matematica/components/moltiplicazioni-virgola/moltiplicazioni-virgola.component';
import {PiuMenoComponent} from './matematica/components/piu-meno/piu-meno.component';
import {ConoscenzeGeneraliComponent} from './conoscenze-generali/containers/conoscenze-generali.component';
import {LeggereOrologioComponent} from './conoscenze-generali/components/leggere-orologio/leggere-orologio.component';
import {MisureLunghezzaComponent} from './conoscenze-generali/components/misure-lunghezza/misure-lunghezza.component';
import {MisurePesoComponent} from './conoscenze-generali/components/misure-peso/misure-peso.component';
import {RiconoscereSoldiComponent} from './conoscenze-generali/components/riconoscere-soldi/riconoscere-soldi.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: 'matematica',
        children: [
            {path: '', component: MatematicaComponent},
            {path: 'calcoli-virgola', component: CalcoliVirgolaComponent},
            {path: 'divisioni', component: DivisioniComponent},
            {path: 'frazioni', component: FrazioniComponent},
            {path: 'moltiplicazioni-due-cifre', component: MoltiplicazioniDueCifreComponent},
            {path: 'moltiplicazioni-virgola', component: MoltiplicazioniVirgolaComponent},
            {path: 'piu-meno', component: PiuMenoComponent}
        ]
    },
    {
        path: 'conoscenze-generali',
        children: [
            {path: '', component: ConoscenzeGeneraliComponent},
            {path: 'leggere-orologio', component: LeggereOrologioComponent},
            {path: 'misure-lunghezza', component: MisureLunghezzaComponent},
            {path: 'misure-peso', component: MisurePesoComponent},
            {path: 'riconoscere-soldi', component: RiconoscereSoldiComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
