import { describe, it, expect, vi, test, beforeEach } from 'vitest';
import type { FetchMock } from 'vitest-fetch-mock'; // contains globalThis.fetchMock declaration
import { DummyComponent } from '../DummyComponent';
import { render, screen, cleanup } from '@testing-library/react';
import userEvents from '@testing-library/user-event';

// @see https://testing-library.com/docs/react-testing-library/intro/
// @see https://jestjs.io/docs/getting-started
// @see https://testing-library.com/docs/queries/about
describe('DummyComponent', () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    mockFn.mockClear();
  });

  it('renders a div', () => {
    render(
      <DummyComponent>
        <div data-testid="child" />
      </DummyComponent>
    );
    const testChild = screen.getByTestId('child');

    expect(testChild.parentElement?.tagName?.toLowerCase()).toBe('div');
  });

  test('fetches correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify('punk'));

    const res = await (await fetch('/pink')).json();

    expect(res).toBe('punk');
  });

  it('calls mockFn', () => {
    expect(mockFn).toHaveBeenCalledTimes(0);
    mockFn();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('registers click events correctly', async () => {
    const user = userEvents.setup();

    render(
      <DummyComponent onClick={mockFn}>
        <p data-testid="child" />
      </DummyComponent>
    );

    const dummyRoot = screen.getByTestId('child').parentElement;

    if (!dummyRoot) {
      throw new Error('not found');
    }

    expect(mockFn).toHaveBeenCalledTimes(0);

    await user.click(dummyRoot);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
