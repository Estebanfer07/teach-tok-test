import {render, screen} from '@testing-library/react-native';
import {HighlightedText} from './highlighted-text';

describe('Highlighted Text', () => {
  it('should render highlighted text', () => {
    render(<HighlightedText text="prueba" />);
    const text = screen.getByText('prueba');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({backgroundColor: 'rgba(0, 0, 0, 0.6)'});
  });
});
