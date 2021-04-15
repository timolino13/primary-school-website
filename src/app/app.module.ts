import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/containers/home.component';
import {ConoscenzeGeneraliModule} from './conoscenze-generali/conoscenze-generali.module';
import {MatematicaModule} from './matematica/matematica.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ConoscenzeGeneraliModule,
    MatematicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
