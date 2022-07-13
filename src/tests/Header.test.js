import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Header from "../Header"
import React from 'react';

it('should render the header', ()=> {
    render(<Header />)
    expect(screen.getByText(/Emoji Search/i)).toBeInTheDocument()
})