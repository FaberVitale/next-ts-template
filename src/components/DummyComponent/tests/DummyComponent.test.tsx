import { DummyComponent } from '../DummyComponent';
import { render, screen } from '@testing-library/react';

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
});
