import { DummyComponent } from '../DummyComponent';
import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// @see https://testing-library.com/docs/react-testing-library/intro/
// @see https://jestjs.io/docs/getting-started
// @see https://testing-library.com/docs/queries/about
describe('DummyComponent', () => {
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
});
