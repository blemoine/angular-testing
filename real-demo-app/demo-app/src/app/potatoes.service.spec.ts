import {TestBed, inject} from '@angular/core/testing';

import {Potato, PotatoesService} from './potatoes.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PotatoesService', () => {
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PotatoesService]
        });
        httpTestingController = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        httpTestingController.verify();
    });

    describe('.getPotatoes()', () => {
        it('should return the potatoes from server', (done) => {
            const service: PotatoesService = TestBed.get(PotatoesService);

            const expectedPotatoes = ['potato1', 'potato2'];
            service.getPotatoes().subscribe((potatoes) => {
                expect(potatoes).toEqual(expectedPotatoes);
                done();
            }, (e) => {
                fail(e);
                done();
            });
            const req = httpTestingController.expectOne('/potatoes');
            // Assert that the request is a GET.
            expect(req.request.method).toEqual('GET');
            req.flush(expectedPotatoes);
        });

        it('should return the potatoes from server - sync', () => {
            const service: PotatoesService = TestBed.get(PotatoesService);

            const expectedPotatoes = ['potato1', 'potato2'];
            let potatoes: Array<Potato>;
            service.getPotatoes().subscribe((httpPotatoes) => {
                potatoes = httpPotatoes
            }, (e) => {
                fail(e);
            });
            const req = httpTestingController.expectOne('/potatoes');
            // Assert that the request is a GET.
            expect(req.request.method).toEqual('GET');
            req.flush(expectedPotatoes);
            expect(potatoes).toEqual(expectedPotatoes);
        });
    });
});
