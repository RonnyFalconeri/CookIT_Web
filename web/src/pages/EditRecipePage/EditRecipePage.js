import { useState } from 'react'
import { routes, navigate } from '@redwoodjs/router'
// import NewRecipeCell from 'src/components/NewRecipeCell'
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

export const UPDATE_RECIPE_MUTATION = gql`
  mutation updateRecipe($id: Int!, $input: UpdateRecipeInput!) {
    updateRecipe(id: $id, input: $input) {
      title
      duration
      nationality
      ingredients
      preparation
      image
      author
    }
  }
`

export const DELETE_RECIPE_MUTATION = gql`
  mutation deleteRecipe($id: Int!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`

const EditRecipePage = (data) => {
  const formMethods = useForm()

  const [update, { loading, error }] = useMutation(UPDATE_RECIPE_MUTATION, {
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
      window.location.href = '/recipes'
    },
  })

  const [remove, { delLoading, delerror }] = useMutation(
    DELETE_RECIPE_MUTATION,
    {
      onCompleted: () => {
        alert('Recipe deleted')
        formMethods.reset()
        window.location.href = '/recipes'
      },
    }
  )

  const onSubmit = () => {
    update({
      variables: {
        id: Number(data.id),
        input: {
          title: recipe.title,
          duration: recipe.duration,
          nationality: recipe.nationality,
          ingredients: JSON.stringify(recipe.ingredients),
          preparation: recipe.preparation,
          image: recipe.image,
          author: recipe.author,
        },
      },
    })
  }

  // init recipe data
  const [recipe, setRecipe] = useState({
    id: parseInt(data.id),
    image: data.image,
    title: data.title,
    duration: data.duration,
    nationality: data.nationality,
    ingredients: JSON.parse(data.ingredients),
    preparation: data.preparation,
    author: data.author,
    favorite: data.favorite,
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

  const addImageCallback = (base64Image) => {
    console.log('image passed up ' + base64Image)
    setRecipe({ image: base64Image })
    window.location.reload()
  }

  return (
    <PageContainerLayout title="Rezept Überarbeiten">
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

        <div style={styles.row}>
          <ImageInput
            value={recipe.image}
            onChange={(value) => _handleImageInput(value)}
            callback={addImageCallback}
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
            <input type="button" value="Speichern" style={styles.saveButton} />
          </Submit>

          <input
            type="button"
            value="Abbrechen"
            style={styles.cancelButton}
            onClick={() => navigate(routes.recipe({ id: recipe.id }))}
          />
          <input
            type="button"
            value="Löschen"
            style={styles.deleteButton}
            onClick={() =>
              remove({
                variables: {
                  id: Number(data.id),
                },
              })
            }
            error={delerror}
          />
        </div>
      </Form>
    </PageContainerLayout>
  )
}

export default EditRecipePage

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
  cancelButton: {
    width: 170,
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'orange',
    border: '1px solid grey',
    boxShadow: 'none',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  },
  deleteButton: {
    width: 170,
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'red',
    border: '1px solid grey',
    boxShadow: 'none',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  },
}
