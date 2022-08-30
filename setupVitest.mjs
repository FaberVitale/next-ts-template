import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

// @see https://www.npmjs.com/package/vitest-fetch-mock
// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation.
const fetchMock = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks();
