import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import Add from './Add.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockedAdd = () => {
  return (
    <BrowserRouter>
      <Add></Add>
    </BrowserRouter>
  )
}


describe('form validation', () => {
  test('on initial load. the Add button is disabled', () => {
    render(<MockedAdd/>)
    // screen.getByTestId('idTest')
    expect(screen.getByRole("button", {name: /add/i})).toBeDisabled();
  })

  test('after providing all inputs, the Add button is enabled', () => {
    render(<MockedAdd/>)
    userEvent.type(screen.getByRole("textbox", {name: /company/i}),"Apple")
    expect(screen.getByRole('textbox', {name: /company/i})).toHaveValue("Apple")
    
    userEvent.selectOptions(screen.getByTestId('position'),["frontend"]);
    expect(screen.getByRole('option', {name: 'frontend'}).selected).toBe(true)
    
    userEvent.selectOptions(screen.getByTestId('status'),["applied"]);
    expect(screen.getByRole('option', {name: 'applied'}).selected).toBe(true)

    fireEvent.change(screen.getByTestId('date_applied'), { target: { value: "2020-05-12" } })
    expect(screen.getByTestId('date_applied')).toHaveValue("2020-05-12")

    fireEvent.change(screen.getByTestId('date_interview'), { target: { value: "2022-04-01T16:20" } })
    expect(screen.getByTestId('date_interview')).toHaveValue("2022-04-01T16:20")

    expect(screen.getByRole("button", {name: /add/i})).toBeEnabled();
  })

  test('no error messages are present on page load', () => {
    expect(screen.queryByTestId('company-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('position-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('status-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('date_applied-error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('date_interview-error')).not.toBeInTheDocument()
  })

  test('error message appears onBlur if input remains empty', () => {
    render(<MockedAdd/>)
    expect(screen.queryByTestId('date_interview-error')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('textbox', {name: /company/i}))
    expect(screen.getByRole('textbox', {name: /company/i})).toHaveFocus()
    userEvent.tab()
    userEvent.tab()
    expect(screen.getByTestId('position-error')).toBeInTheDocument()
    userEvent.tab()
    expect(screen.getByTestId('status-error')).toBeInTheDocument()
    userEvent.tab()
    expect(screen.getByTestId('date_applied-error')).toBeInTheDocument()
    userEvent.tab()
    expect(screen.getByTestId('date_interview-error')).toBeInTheDocument()
  })
})