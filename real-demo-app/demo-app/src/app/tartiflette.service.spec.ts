import {TestBed, inject} from '@angular/core/testing';

import {Tartiflette, TartifletteService} from './tartiflette.service';
import {createService} from '@netbasal/spectator';
import {PotatoesService} from './potatoes.service';
import {CheeseService} from './cheese.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

describe('TartifletteService', () => {
    const spectator = createService({
        service: TartifletteService,
        mocks: [PotatoesService],
        providers: [{
            provide: CheeseService, useValue: {
                getReblochon() {
                    return 'cheddar';
                }
            }
        }],
    });

    it('should cook a tartiflette', (done) => {
        const service = spectator.service;
        const expectedTartiflette = {potatoes: ['potato1', 'potato2'], reblochon: 'cheddar'};
        const potatoesService = spectator.get<PotatoesService>(PotatoesService);
        potatoesService.getPotatoes.and.returnValue(of(expectedTartiflette.potatoes));
        service.cook().subscribe((tartiflette) => {
            expect(tartiflette as any).toEqual(expectedTartiflette);
            done();
        }, (e) => {
            fail(e);
            done();
        });
    });
});
