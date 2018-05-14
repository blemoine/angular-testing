import {TartifletteComponent} from './tartiflette.component';
import {createHostComponentFactory} from '@netbasal/spectator';
import {Tartiflette} from '../tartiflette.service';
import {Reblochon} from '../cheese.service';
import {Potato} from '../potatoes.service';

type HostProps = { tartiflette: Tartiflette };
describe('TartifletteComponent', () => {
    const createHost = createHostComponentFactory<TartifletteComponent, HostProps>(TartifletteComponent);
    it('should display a tartiflette if there is one', () => {
        const spectator = createHost(`<tartiflette [tartiflette]="tartiflette"></tartiflette>`);
        expect('.tartiflette').not.toExist();
        spectator.hostComponent.tartiflette = {potatoes: [], reblochon: 'reblochon' };
        spectator.detectChanges();
        expect('.tartiflette').toExist();
    });
});
