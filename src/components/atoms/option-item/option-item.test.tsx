import 'react-native';
import React from 'react';
import {OptionItem} from './option-item';
import {render, screen, userEvent} from '@testing-library/react-native';

describe('OptionItem Test', () => {
  it('should render option', () => {
    render(
      <OptionItem
        answer="test answer"
        currentAnswer="A"
        correctAnswer="A"
        selectedAnswer=""
        setSelectedAnswer={() => {}}
      />,
    );

    const answer = screen.getByText(/test answer/i);
    expect(answer).toBeOnTheScreen();
  });

  it('should handle selecting correct answer', async () => {
    const setAnswerMock = jest.fn();
    const user = userEvent.setup();
    render(
      <OptionItem
        answer="test answer"
        currentAnswer="A"
        correctAnswer="A"
        selectedAnswer="A"
        setSelectedAnswer={setAnswerMock}
      />,
    );

    const answer = screen.getByTestId('option-item');
    await user.press(answer);

    expect(setAnswerMock).toHaveBeenCalled();
    expect(answer).toHaveStyle({backgroundColor: 'green'});
  });

  it('should handle selecting wrong answer', async () => {
    const setAnswerMock = jest.fn();
    const user = userEvent.setup();
    render(
      <OptionItem
        answer="test answer"
        currentAnswer="B"
        correctAnswer="A"
        selectedAnswer="B"
        setSelectedAnswer={setAnswerMock}
      />,
    );

    const answer = screen.getByTestId('option-item');
    await user.press(answer);
    expect(setAnswerMock).toHaveBeenCalled();
    expect(answer).toHaveStyle({backgroundColor: 'red'});
  });
});
