import helloHandler from '../hello';

// endpoint handlers are simple functions,
// use https://www.npmjs.com/package/node-mocks-http or https://www.npmjs.com/package/next-test-api-route-handler
// If you need to test them.
// @see https://nextjs.org/docs/api-routes/introduction
describe('api/hello', () => {
  it('exports a function as default import', () => {
    expect(typeof helloHandler).toBe('function');
  });
});
