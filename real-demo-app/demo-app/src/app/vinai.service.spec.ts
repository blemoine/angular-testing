import {CheeseService} from './cheese.service';
import {TartifletteService} from './tartiflette.service';
import {PotatoesService} from './potatoes.service';
import {createService} from '@netbasal/spectator';
import {VinaiService} from './vinai.service';
import {discardPeriodicTasks, fakeAsync, tick} from '@angular/core/testing';

describe('vinaiService', () => {
    describe('eat', () => {
        const spectator = createService({
            service: VinaiService,
            mocks: [TartifletteService],
        });

        it('should eat every 2 seconds', fakeAsync(() => {
            console.log = jasmine.createSpy("log");
            spectator.service.eat();
            tick(3000);
            expect(console.log).toHaveBeenCalledTimes(1);
            tick(3001);
            expect(console.log).toHaveBeenCalledTimes(3);
            discardPeriodicTasks();
        }));
    });
});