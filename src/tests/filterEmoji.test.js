import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import App from "../App"
import React from 'react';

it("should render after filter processing", () => {
    render(<App />)
    const searchTerm = "smirk"
    const input = screen.getByDisplayValue("")

    userEvent.type(input,searchTerm)

    const emojiList = screen.getAllByText("Click to copy emoji")

    expect(emojiList).toHaveLength(2);  
})