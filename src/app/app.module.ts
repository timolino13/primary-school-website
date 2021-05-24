import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/containers/home.component';
import {ConoscenzeGeneraliModule} from './conoscenze-generali/conoscenze-generali.module';
import {MatematicaModule} from './matematica/matematica.module';
import {HeaderComponent} from './header/header.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ConoscenzeGeneraliModule,
        MatematicaModule,
        NgxMaterialTimepickerModule,
        DragDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
