import {TartifletteContainer} from './tartiflette.container';
import {createTestComponentFactory} from '@netbasal/spectator';
import {TartifletteComponent} from './tartiflette.component';
import {Tartiflette, TartifletteService} from '../tartiflette.service';
import {Subject} from 'rxjs/Subject';

describe('TartifletteContainer', () => {
    const cook$: Subject<Tartiflette> = new Subject();
    const createComponent = createTestComponentFactory({
        component: TartifletteContainer,
        providers: [{
            provide: TartifletteService, useValue: {
                cook: () => cook$
            }
        }],
        declarations: [TartifletteComponent],
    });

    it('should display a tartiflette when cooked', () => {
        const spectator = createComponent();
        expect('.tartiflette').not.toExist();
        spectator.click('input');
        expect('.tartiflette').not.toExist();
        cook$.next({potatoes: [], reblochon: 'reblochon'});
        spectator.detectChanges();
        expect('.tartiflette').toExist();
    });
});
