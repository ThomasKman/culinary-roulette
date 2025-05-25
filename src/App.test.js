import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Culinary Roulette heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Culinary Roulette/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders clickable app title with mode indicator', () => {
  render(<App />);
  const appTitle = screen.getByText(/Culinary Roulette/i);
  const modeIndicator = screen.getByText(/Ingredients/i, { selector: '.mode-indicator' });

  expect(appTitle).toBeInTheDocument();
  expect(modeIndicator).toBeInTheDocument();
});

test('initially renders ingredients section', () => {
  render(<App />);
  const rollAllButton = screen.getByText(/Roll All Ingredients/i);
  expect(rollAllButton).toBeInTheDocument();

  // Recipe section should not be visible initially
  const recipeButton = screen.queryByText(/Roll Recipe/i);
  expect(recipeButton).not.toBeInTheDocument();
});

test('toggles to recipe mode when app title is clicked', () => {
  render(<App />);

  // Click the app title to toggle
  const appTitle = screen.getByText(/Culinary Roulette/i);
  fireEvent.click(appTitle);

  // Now recipe section should be visible
  const recipeButton = screen.getByText(/Roll Recipe/i);
  expect(recipeButton).toBeInTheDocument();

  // Ingredients section should not be visible
  const rollAllButton = screen.queryByText(/Roll All Ingredients/i);
  expect(rollAllButton).not.toBeInTheDocument();

  // Mode indicator should change to Recipes
  const modeIndicator = screen.getByText(/Recipes/i, { selector: '.mode-indicator' });
  expect(modeIndicator).toBeInTheDocument();
});

test('toggles back to ingredients mode when app title is clicked again', () => {
  render(<App />);

  // First click to go to recipe mode
  const appTitle = screen.getByText(/Culinary Roulette/i);
  fireEvent.click(appTitle);

  // Second click to go back to ingredients mode
  fireEvent.click(appTitle);

  // Ingredients section should be visible again
  const rollAllButton = screen.getByText(/Roll All Ingredients/i);
  expect(rollAllButton).toBeInTheDocument();

  // Recipe section should not be visible
  const recipeButton = screen.queryByText(/Roll Recipe/i);
  expect(recipeButton).not.toBeInTheDocument();

  // Mode indicator should change back to Ingredients
  const modeIndicator = screen.getByText(/Ingredients/i, { selector: '.mode-indicator' });
  expect(modeIndicator).toBeInTheDocument();
});
