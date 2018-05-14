import {Injectable} from '@angular/core';
import {CheeseService, Reblochon} from './cheese.service';
import {Potato, PotatoesService} from './potatoes.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';

export type Tartiflette = { potatoes: Array<Potato>, reblochon: Reblochon };

@Injectable()
export class TartifletteService {
    constructor(private cheeseService: CheeseService,
                private potatoesService: PotatoesService) {
    }

    cook(): Observable<Tartiflette> {
        return this.potatoesService.getPotatoes().pipe(
            map((potatoes) => {
                return {
                    potatoes,
                    reblochon: this.cheeseService.getReblochon()
                };
            }),
        );
    }


}
