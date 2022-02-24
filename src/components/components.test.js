import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';

import Quote from './Quote';
import Navigation from './Navigation';
import Calculator from './Calculator';
import Home from './Home';

afterEach(() => {
  cleanup();
});

// --------------Home test------------

describe('should render the test for Home', () => {
  render(<Home />);
  const homePage = screen.getByTestId('home-page');
  expect(homePage).toBeTruthy();

  test('test render snapshot for home page', () => {
    const tree = renderer.create(<Router><Home /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// --------------Quotes page---------------

test('should render the quote component', () => {
  render(<Quote />);
  const quotes = screen.getAllByTestId('quotes');
  expect(quotes).toBeTruthy();
});

// ---------------navigation bar----------------

describe('run test to render the navigation', () => {
  test('test for nav component', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );

    const navBar = screen.getByTestId('navbar');

    expect(navBar).toBeTruthy();
  });

  test('test navbar snapshot', () => {
    const tree = renderer.create(<Router><Navigation /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// -------------------calculator------------------

describe('run test for the calculator component', () => {
  test('run to check events to the calculator', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('7'));
    fireEvent.click(screen.getByTestId('+'));
    fireEvent.click(screen.getByTestId('9'));
    fireEvent.click(screen.getByTestId('='));
    const result = screen.getByTestId('display');
    expect(result.innerHTML).toBe('16   ');
  });

  test('test to render snapshot for calculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
