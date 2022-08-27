import { DummyComponent } from '../DummyComponent';
import { render, screen } from '@testing-library/react';

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
