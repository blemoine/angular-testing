import {getReblochon} from './cheese.helpers';

describe('.getReblochon()', () => {
    it('should return a reblochon', () => {
        expect(getReblochon()).toBe('reblochon');
    });
});
