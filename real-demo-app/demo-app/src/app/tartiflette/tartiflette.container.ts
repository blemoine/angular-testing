import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Tartiflette, TartifletteService} from '../tartiflette.service';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'tartiflette-container',
    template: `
        <tartiflette [tartiflette]="tartiflette$ | async"
                     (cook)="cook()">
        </tartiflette>`

})
export class TartifletteContainer {
    public tartiflette$: Subject<Tartiflette> = new Subject();

    constructor(private tartifletteService: TartifletteService) {
    }

    cook() {
        this.tartifletteService.cook().subscribe(this.tartiflette$);
    }
}
