import createFetchMock from 'vitest-fetch-mock';
import { vi, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  // We need to clean up between tests with vitest
  // @see https://testing-library.com/docs/react-testing-library/api/#cleanup
  cleanup();
});

// @see https://www.npmjs.com/package/vitest-fetch-mock
// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation.
const fetchMock = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks();
