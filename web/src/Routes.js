// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/randomrecipe" page={RandomrecipePage} name="randomrecipe" />
      <Route path="/favorites" page={FavoritesPage} name="favorites" />
      <Route path="/newrecipe" page={NewRecipePage} name="newRecipe" />
      <Route path="/recipes" page={RecipesPage} name="recipes" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
