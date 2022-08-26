import handler from '../hello';

describe('api/hello', () => {
  it('exports a function as default import', () => {
    expect(typeof handler).toBe('function');
  });
});
