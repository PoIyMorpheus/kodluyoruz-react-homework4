import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import App from "../App"
import React from 'react';

describe("Emoji Result Row Tests",()=>{
    beforeEach(()=>{
        render(<App />);
    })
    it('should render the emoji list',()=>{
        const emojiList = screen.getAllByText("Click to copy emoji")

        expect(emojiList).toHaveLength(20);
    })

    it("should copy the clicked emoji",()=>{
        const copiedText = screen.getByText("Upside Down").parentNode.getAttribute("data-clipboard-text")
        
        expect(copiedText).toEqual("🙃")
    })
})