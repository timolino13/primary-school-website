import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConoscenzeGeneraliComponent} from './containers/conoscenze-generali.component';
import {LeggereOrologioComponent} from './components/leggere-orologio/leggere-orologio.component';
import {MisureLunghezzaComponent} from './components/misure-lunghezza/misure-lunghezza.component';
import {MisurePesoComponent} from './components/misure-peso/misure-peso.component';
import {RiconoscereSoldiComponent} from './components/riconoscere-soldi/riconoscere-soldi.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
    declarations: [
        ConoscenzeGeneraliComponent,
        LeggereOrologioComponent,
        MisureLunghezzaComponent,
        MisurePesoComponent,
        RiconoscereSoldiComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class ConoscenzeGeneraliModule {
}
