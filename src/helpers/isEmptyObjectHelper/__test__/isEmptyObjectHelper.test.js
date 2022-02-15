import { isEmptyObjectHelper } from '../isEmptyObjectHelper';

describe('isEmptyObject', () => {
  it('should return true if passed object is a object ', () => {
    const mockObject = {};
    const expected = isEmptyObjectHelper(mockObject);
    const result = true;
    expect(expected).toEqual(result);
  });
  it('should return false if passed object has some object ', () => {
    const mockObject = { nameError: 'please enter name' };
    const expected = isEmptyObjectHelper(mockObject);
    const result = false;
    expect(expected).toEqual(result);
  });
});
