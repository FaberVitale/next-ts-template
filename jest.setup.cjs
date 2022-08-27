'use strict';

// use this file to setup the testing environment

// Mocks all fetch requests
/**
 * If `true` mocks all fetch requests.
 *
 * ### Usage
 *
 * ```ts
 * import fetchMock from "jest-fetch-mock";
 *
 * test('fetches correctly', async () => {
 *   fetchMock.mockResponseOnce(JSON.stringify('punk'));
 *
 *   const res = await (await fetch('/pink')).json();
 *
 *   expect(res).toBe('punk');
 * });
 * ```
 */
let enableFetchMock = true;

if (enableFetchMock) {
  require('jest-fetch-mock').enableMocks();
}
