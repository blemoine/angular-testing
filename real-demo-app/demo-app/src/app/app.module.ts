import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TartifletteComponent} from './tartiflette/tartiflette.component';
import {TartifletteContainer} from './tartiflette/tartiflette.container';
import {TartifletteService} from './tartiflette.service';
import {CheeseService} from './cheese.service';
import {PotatoesService} from './potatoes.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        TartifletteComponent,
        TartifletteContainer,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [TartifletteService, CheeseService, PotatoesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
