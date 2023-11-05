import {render, screen} from '@testing-library/react-native';
import {CircleAvatar} from './circle-avatar';

describe('Circle Avatar', () => {
  it('should render circle avatar', () => {
    const mockuRI = 'test uri';
    render(<CircleAvatar uri={mockuRI} />);
    const image = screen.getByTestId('avatar-image');
    expect(image).toBeOnTheScreen();
    expect(image).toHaveProp('source', {uri: mockuRI});
  });
});
