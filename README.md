# Culinary Roulette

A fun React application that helps you decide what to cook by randomly selecting ingredients or recipes.

## What the App Does

Culinary Roulette has two main modes:

1. **Ingredients Mode**: Randomly selects ingredients from different categories (sides, vegetables, proteins, fruits) to inspire your cooking.
   - Roll all ingredients at once or re-roll specific categories
   - Mix and match ingredients to create unique meal ideas

2. **Recipe Mode**: Randomly selects a complete recipe from a predefined list.
   - Get instant recipe suggestions when you're not sure what to cook

## Adding Ingredients and Recipes

### Adding Ingredients or Categories

To add new ingredients or categories, edit the `src/ingredients.json` file:

- To add a new ingredient: Add the ingredient name to the appropriate category array
- To add a new category: Add a new key-value pair where the key is the category name and the value is an array of ingredients

Example:
```json
{
  "Existing Category": [
    "Existing Ingredient",
    "New Ingredient"
  ],
  "New Category": [
    "Ingredient 1",
    "Ingredient 2"
  ]
}
```

### Adding Recipes

To add new recipes, edit the `src/rezepte.json` file:

- Add the recipe name to the "Rezepte" array

Example:
```json
{
  "Rezepte": [
    "Existing Recipe",
    "New Recipe"
  ]
}
```

## How to Build and Start the App

### Installation

Before running the app, install the dependencies:

```
npm install
```

### Running the App

To start the development server:

```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

To create a production build:

```
npm run build
```

This builds the app for production to the `build` folder, optimized for best performance.

## Additional Scripts and Information

Below are more details about the available scripts and additional information:

### More About `npm start`

When running the app in development mode:
- The page will reload when you make changes
- You may also see any lint errors in the console

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### More About `npm run build`

When building the app for production:
- It correctly bundles React in production mode and optimizes for the best performance
- The build is minified and the filenames include hashes
- Your app is ready to be deployed

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
