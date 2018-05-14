import {TestBed, inject} from '@angular/core/testing';

import {Potato, PotatoesService} from './potatoes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {createHTTPFactory, HTTPMethod} from '@netbasal/spectator';

describe('PotatoesService', () => {

    const http = createHTTPFactory<PotatoesService>(PotatoesService);
    describe('.getPotatoes()', () => {
        it('should return the potatoes from server', (done) => {
            const {dataService, expectOne } = http();

            const expectedPotatoes = ['potato1', 'potato2'];
            dataService.getPotatoes().subscribe((potatoes) => {
                expect(potatoes).toEqual(expectedPotatoes);
                done();
            }, (e) => {
                fail(e);
                done();
            });
            expectOne('/potatoes', HTTPMethod.GET).flush(expectedPotatoes);
        });
    });
});
