import helloHandler from '../hello';

describe('api/hello', () => {
  it('exports a function as default import', () => {
    expect(typeof helloHandler).toBe('function');
  });
});
