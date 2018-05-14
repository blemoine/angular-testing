import {Injectable} from '@angular/core';
import {TartifletteService} from './tartiflette.service';
import {interval} from 'rxjs/observable/interval';
import 'rxjs/add/operator/map';

@Injectable()
export class VinaiService {

    constructor(private tartifletteService: TartifletteService) { }

    eat() {
        interval(2000).map(() => {
            this.tartifletteService.cook();
        }).subscribe((tartiflette) => console.log('eat', tartiflette));
    }
}
