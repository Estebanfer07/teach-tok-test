import {render, screen} from '@testing-library/react-native';
import {OptionsList} from './options-list';
import {Option} from '../../../interfaces/question.interface';

describe('Options List', () => {
  const options: Option[] = [
    {answer: 'test answer A', id: 'A'},
    {answer: 'test answer B', id: 'B'},
    {answer: 'test answer C', id: 'C'},
  ];

  it('should render options list with correct amount of items', () => {
    render(<OptionsList options={options} questionId={1} />);
    const items = screen.getAllByText(/test answer/i);
    expect(items.length).toBe(options.length);
  });
});
