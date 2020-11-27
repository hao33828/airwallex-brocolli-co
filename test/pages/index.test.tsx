import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Home } from '../../pages'
import InviteForm from '../../components/InviteForm'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const initialState = {
  modal: {
    visible: false,
  },
  requestInvite: {
    data: null,
    error: null,
    sending: false,
    success: false,
  },
}

afterEach(cleanup)

describe('Home Page Initial Content', () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const jsx = (
    <Provider store={store}>
      <Home />
    </Provider>
  )

  it('Shows "BROCCOLI & CO."', () => {
    const { getByText } = render(jsx)
    expect(getByText('BROCCOLI & CO.')).not.toBeNull()
  })
  it('Shows "A better way to enjoy every day"', () => {
    const { getByText } = render(jsx)
    expect(getByText('A better way to enjoy every day')).not.toBeNull()
  })
  it('Shows "Be the first to know when we launch."', () => {
    const { getByText } = render(jsx)
    expect(getByText('Be the first to know when we launch.')).not.toBeNull()
  })
  it('Shows "Request an invite"', () => {
    const { getByText } = render(jsx)
    expect(getByText('Request an invite')).not.toBeNull()
  })
  it('Shows "Made with ♥ in Melbourne."', () => {
    const { getByText } = render(jsx)
    expect(getByText('Made with ♥ in Melbourne.')).not.toBeNull()
  })
  it('Shows "@ 2016 Broccoli & co. All rights reserved."', () => {
    const { getByText } = render(jsx)
    expect(
      getByText('@ 2016 Broccoli & co. All rights reserved.')
    ).not.toBeNull()
  })
})

describe('Home Page Form', () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const jsx = (
    <Provider store={store}>
      <InviteForm />
    </Provider>
  )
  it('show form field "Full name"', async () => {
    const { getByPlaceholderText } = render(jsx)
    expect(getByPlaceholderText('Full name')).not.toBeNull()
  })

  it('show form field "Email"', async () => {
    const { getByPlaceholderText } = render(jsx)
    expect(getByPlaceholderText('Email')).not.toBeNull()
  })

  it('show form field "Confirm Email"', async () => {
    const { getByPlaceholderText } = render(jsx)
    expect(getByPlaceholderText('Confirm Email')).not.toBeNull()
  })
})
