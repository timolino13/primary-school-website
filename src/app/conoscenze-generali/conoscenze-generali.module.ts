import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConoscenzeGeneraliComponent} from './containers/conoscenze-generali.component';
import {LeggereOrologioComponent} from './components/leggere-orologio/leggere-orologio.component';
import {MisureLunghezzaComponent} from './components/misure-lunghezza/misure-lunghezza.component';
import {MisurePesoComponent} from './components/misure-peso/misure-peso.component';
import {RiconoscereFotoComponent} from './components/riconoscere-foto/riconoscere-foto.component';
import {RiconoscereSoldiComponent} from './components/riconoscere-soldi/riconoscere-soldi.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'conoscenze-generali',
    children: [
      { path: '', component: ConoscenzeGeneraliComponent },
      { path: 'leggere-orologio', component: LeggereOrologioComponent },
      { path: 'misure-lunghezza', component: MisureLunghezzaComponent },
      { path: 'misure-peso', component: MisurePesoComponent },
      { path: 'riconoscere-soldi', component: RiconoscereSoldiComponent }
    ]
  }
];


@NgModule({
  declarations: [
    ConoscenzeGeneraliComponent,
    LeggereOrologioComponent,
    MisureLunghezzaComponent,
    MisurePesoComponent,
    RiconoscereFotoComponent,
    RiconoscereSoldiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class ConoscenzeGeneraliModule { }
