import {price} from '../index.mjs'
import assert from 'assert'

describe('Test Price', ()=> {
    it('Basic', () => {
        assert.equal(0, price([]))
        assert.equal(8, price([1]))
        assert.equal(8, price([2]))
        assert.equal(8, price([3]))
        assert.equal(8, price([4]))
        assert.equal(8 * 3, price([1, 1, 1]))
    });

    it('SimpleDiscounts', () => {
        assert.equal(8 * 2 * 0.95, price([0, 1]))
        assert.equal(8 * 3 * 0.9, price([0, 2, 4]))
        assert.equal(8 * 4 * 0.8, price([0, 1, 2, 4]))
        assert.equal(8 * 5 * 0.75, price([0, 1, 2, 3, 4]))
    });
});