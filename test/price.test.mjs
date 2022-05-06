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
});