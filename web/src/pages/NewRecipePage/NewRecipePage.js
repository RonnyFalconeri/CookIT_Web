import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import { useState } from 'react'
// import NewRecipeCell from 'src/components/NewRecipeCell'

import TitleInput from 'src/components/TitleInput'
import DurationInput from 'src/components/DurationInput'
import NationalityInput from 'src/components/NationalityInput'
import ImageInput from 'src/components/ImageInput'
import IngredientsInput from 'src/components/IngredientsInput'
import PreparationInput from 'src/components/PreparationInput'
import AuthorInput from 'src/components/AuthorInput'

const NewRecipePage = () => {
  // init recipe data
  const [recipe, setRecipe] = useState({
    image: null,
    title: '',
    duration: '',
    nationality: 'none',
    ingredients: [{ amount: '', ingredient: '' }],
    preparation: '',
    author: '',
    favorite: false,
  })

  // handle input changes
  const _handleImageInput = (value) => {
    setRecipe({ ...recipe, image: value })
  }

  const _handleTitleInput = (value) => {
    setRecipe({ ...recipe, title: value })
  }

  const _handleDurationInput = (value) => {
    setRecipe({ ...recipe, duration: value })
  }

  const _handleNationalityInput = (value) => {
    setRecipe({ ...recipe, nationality: value })
  }

  const _handleIngredientsInput = (value) => {
    setRecipe({ ...recipe, ingredients: value })
  }

  const _handlePreparationInput = (value) => {
    setRecipe({ ...recipe, preparation: value })
  }

  const _handleAuthorInput = (value) => {
    setRecipe({ ...recipe, author: value })
  }

  return (
    <DefaultContainerLayout>
      <div style={styles.row}>
        <ImageInput
          value={recipe.image}
          onChange={(value) => _handleImageInput(value)}
        />

        <div style={styles.containerTitle}>
          <TitleInput
            value={recipe.title}
            onChange={(value) => _handleTitleInput(value)}
          />

          <DurationInput
            value={recipe.duration}
            onChange={(value) => _handleDurationInput(value)}
          />

          <NationalityInput
            value={recipe.nationality}
            onChange={(value) => _handleNationalityInput(value)}
          />
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <IngredientsInput
          ingredients={recipe.ingredients}
          onChange={(value) => _handleIngredientsInput(value)}
        />

        <PreparationInput
          value={recipe.preparation}
          onChange={(value) => _handlePreparationInput(value)}
        />
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <AuthorInput
          value={recipe.author}
          onChange={(value) => _handleAuthorInput(value)}
        />
      </div>

      <div style={styles.row}>
        <input
          type="button"
          value="Speichern"
          style={styles.saveButton}
          onClick={() => console.log(recipe)}
        />
      </div>
    </DefaultContainerLayout>
  )
}

export default NewRecipePage

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  separator: {
    marginTop: 40,
    marginBottom: 40,
  },
  saveButton: {
    width: 170,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#93c47d',
    border: '1px solid grey',
    boxShadow: 'none',
  },
}
