import { useState } from 'react'
import { Form, Submit, FormError, useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import PageContainerLayout from 'src/layouts/PageContainerLayout'

import TitleInput from 'src/components/TitleInput'
import DurationInput from 'src/components/DurationInput'
import NationalityInput from 'src/components/NationalityInput'
import ImageInput from 'src/components/ImageInput'
import IngredientsInput from 'src/components/IngredientsInput'
import PreparationInput from 'src/components/PreparationInput'
import AuthorInput from 'src/components/AuthorInput'

/**
 *
 * A page with logic for writing new recipes to the databank via CREATE_RECIPE_MUTATION
 *
 */
export const CREATE_RECIPE_MUTATION = gql`
  mutation createRecipe($input: CreateRecipeInput!) {
    createRecipe(input: $input) {
      title
      duration
      nationality
      ingredients
      preparation
      image
      author
      favorite
    }
  }
`
const NewRecipePage = () => {
  const formMethods = useForm()

  // use mutation to write new recipe to db
  const [create, { loading, error }] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = () => {
    var valid = _validateInputs() // make sure form is filled out

    if (valid) {
      create({
        variables: {
          input: {
            title: recipe.title,
            duration: recipe.duration,
            nationality: recipe.nationality,
            ingredients: JSON.stringify(recipe.ingredients),
            preparation: recipe.preparation,
            image: recipe.image,
            author: recipe.author,
            favorite: recipe.favorite,
          },
        },
      })
    }
  }

  // init recipe data
  const [recipe, setRecipe] = useState({
    image: '../../../public/images/recipeDefaultImage.png',
    title: '',
    duration: '',
    nationality: 'none',
    ingredients: [{ amount: '', ingredient: '' }],
    preparation: '',
    author: '',
    favorite: false,
  })

  // init recipe data
  const [showInfo, setShowInfo] = useState('none')

  //validate inputs
  const _validateInputs = () => {
    let valid = true
    setShowInfo('none')
    if (
      recipe.title == '' ||
      recipe.duration == '' ||
      recipe.preparation == '' ||
      recipe.author == ''
    ) {
      // if false, show error info
      valid = false
      setShowInfo('block')
    }
    return valid
  }

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
    <PageContainerLayout title="Neues Rezept">
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <p style={{ ...styles.errorInfo, ...{ display: showInfo } }}>
          Fehler: Bitte füllen Sie alle Eingabefelder aus.
        </p>

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

        <div style={{ ...styles.row, ...{ alignItems: 'flex-start' } }}>
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
          <Submit>
            <input
              type="button"
              value="Speichern"
              style={styles.saveButton}
              onClick={() => console.log(recipe)}
            />
          </Submit>
        </div>
      </Form>
    </PageContainerLayout>
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
  errorInfo: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 20,
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
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#93c47d',
    border: '1px solid grey',
    boxShadow: 'none',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  },
}
