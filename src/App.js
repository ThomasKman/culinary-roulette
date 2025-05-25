import React, { useState, useEffect } from 'react';
import './App.css';
import ingredientsData from './ingredients.json';
import rezepteData from './rezepte.json';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [activeMode, setActiveMode] = useState('ingredients'); // 'ingredients' or 'recipe'
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingCategory, setAnimatingCategory] = useState(null);

  useEffect(() => {
    // Get all categories from the JSON file
    const categoryNames = Object.keys(ingredientsData);
    setCategories(categoryNames);

    // Initialize selected ingredients with empty values
    const initialIngredients = {};
    categoryNames.forEach(category => {
      initialIngredients[category] = '';
    });
    setSelectedIngredients(initialIngredients);
  }, []);

  // Function to randomly select an ingredient from a category
  const getRandomIngredient = (category) => {
    const ingredients = ingredientsData[category];
    const randomIndex = Math.floor(Math.random() * ingredients.length);
    return ingredients[randomIndex];
  };

  // Animation utility function
  const animateSelection = (callback, finalValue, duration = 1000, steps = 10) => {
    setIsAnimating(true);

    // Calculate time intervals with easing (faster at start, slower at end)
    const intervals = [];
    let totalTime = 0;

    // Create non-linear intervals using an easing function
    for (let i = 0; i < steps; i++) {
      // This formula creates intervals that start small and get progressively larger
      const progress = i / (steps - 1);
      const easedProgress = 0.2 + 0.8 * Math.pow(progress, 2); // Quadratic easing
      const intervalTime = Math.round(easedProgress * (duration / steps) * 2);
      intervals.push(intervalTime);
      totalTime += intervalTime;
    }

    // Normalize intervals to ensure total duration is exactly 1000ms
    const scaleFactor = duration / totalTime;
    for (let i = 0; i < intervals.length; i++) {
      intervals[i] = Math.round(intervals[i] * scaleFactor);
    }

    let count = 0;

    const animate = () => {
      if (count < steps - 1) {
        callback();
        count++;
        setTimeout(animate, intervals[count - 1]);
      } else {
        // Set the final value
        if (finalValue) {
          callback(finalValue);
        } else {
          callback();
        }
        setIsAnimating(false);
        setAnimatingCategory(null);
      }
    };

    animate();
  };

  // Function to roll all categories
  const rollAll = () => {
    if (isAnimating) return; // Prevent multiple animations

    setIsAnimating(true);

    // Create a copy of the current ingredients
    const newIngredients = { ...selectedIngredients };

    // Animate each category
    animateSelection(() => {
      categories.forEach(category => {
        newIngredients[category] = getRandomIngredient(category);
      });
      setSelectedIngredients({ ...newIngredients });
    });
  };

  // Function to re-roll a specific category
  const reRollCategory = (category) => {
    if (isAnimating) return; // Prevent multiple animations

    setAnimatingCategory(category);

    animateSelection(() => {
      setSelectedIngredients(prev => ({
        ...prev,
        [category]: getRandomIngredient(category)
      }));
    });
  };

  // Function to randomly select a recipe
  const getRandomRecipe = () => {
    const recipes = rezepteData.Rezepte;
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  };

  // Function to roll a new recipe
  const rollRecipe = () => {
    if (isAnimating) return; // Prevent multiple animations

    animateSelection(() => {
      setSelectedRecipe(getRandomRecipe());
    });
  };

  // Function to toggle between ingredients and recipe modes
  const toggleMode = () => {
    setActiveMode(prevMode => prevMode === 'ingredients' ? 'recipe' : 'ingredients');
  };

  return (
    <div className={`App ${activeMode}-mode`}>
      <header className="App-header">
        <h1 
          className="app-title" 
          onClick={toggleMode}
        >
          Culinary Roulette
          <div className="mode-indicator">
            {activeMode === 'ingredients' ? 'Ingredients' : 'Recipes'}
            <span className="toggle-icon">↔</span>
          </div>
        </h1>

        {activeMode === 'ingredients' ? (
          <>
            <div className="ingredients-container">
              {categories.map(category => (
                <div key={category} className="category-card">
                  <h2>{category}</h2>
                  <div className={`ingredient ${isAnimating && (animatingCategory === category || animatingCategory === null) ? 'animating' : ''}`}>
                    {selectedIngredients[category] || 'Roll to select'}
                  </div>
                  <button onClick={() => reRollCategory(category)}>
                    Re-roll {category}
                  </button>
                </div>
              ))}
            </div>
            <button className="roll-all-button" onClick={rollAll}>
              Roll All Ingredients
            </button>
          </>
        ) : (
          <>
            <div className="recipe-container">
              <div className="recipe-card">
                <div className={`recipe ${isAnimating ? 'animating' : ''}`}>
                  {selectedRecipe || 'Roll to select a recipe'}
                </div>
                <button className="recipe-button" onClick={rollRecipe}>
                  Roll Recipe
                </button>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
