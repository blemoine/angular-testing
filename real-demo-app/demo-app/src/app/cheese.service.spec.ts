import {TestBed, inject} from '@angular/core/testing';

import {CheeseService} from './cheese.service';

describe('CheeseService', () => {
    describe('.getReblochon()', () => {
        it('should return a reblochon', () => {
            const service = new CheeseService();
            expect(service.getReblochon()).toBe('reblochon');
        });
    });
});
