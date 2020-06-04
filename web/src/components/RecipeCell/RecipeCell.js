import PageContainerLayout from 'src/layouts/PageContainerLayout'
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'

import EditButton from 'src/components/EditButton'

import Add2Favorites from '../Add2Favorites'

export const QUERY = gql`
  query($id: Int!) {
    recipe(id: $id) {
      id
      title
      duration
      nationality
      ingredients
      preparation
      image
      author
      favorite
      created_at
    }
  }
`
export const UPDATE_FAVORITE_MUTATION = gql`
  mutation updateRecipe($id: Int!, $input: UpdateRecipeInput!) {
    updateRecipe(id: $id, input: $input) {
      favorite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipe }) => {
  // init recipe data
  const [Recipe, setRecipe] = useState({
    image: null,
    title: recipe.title,
    duration: recipe.duration,
    nationality: recipe.nationality,
    ingredients: JSON.parse(recipe.ingredients),
    preparation: recipe.preparation,
    author: recipe.author,
    favorite: recipe.favorite,
    createdAt: recipe.created_at,
  })

  // generate ingredient rows
  let ingredientRows = Recipe.ingredients.map((row, i) => {
    return (
      <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        <span
          style={{
            textAlign: 'right',
            margin: 5,
            width: 100,
            fontWeight: 'bold',
          }}
        >
          {row.amount}
        </span>
        <span style={{ textAlign: 'left', margin: 5, width: 100 }}>
          {row.ingredient}
        </span>
      </div>
    )
  })

  const [create] = useMutation(UPDATE_FAVORITE_MUTATION)

  const changeFavoriteCallback = (favBool) => {
    setRecipe({ ...Recipe, favorite: favBool })

    create({
      variables: {
        id: recipe.id,
        input: {
          favorite: favBool,
        },
      },
    })
  }

  return (
    <PageContainerLayout title="Rezept">
      <div style={styles.row}>
        <img
          src="../../../public/images/recipeDefaultImage.png"
          style={styles.image}
        />

        <Add2Favorites
          favorite={Recipe.favorite}
          callback={changeFavoriteCallback}
        />

        <div style={styles.containerTitle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={styles.title}>{Recipe.title}</h1>
            <EditButton data={Recipe} />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: 200,
            }}
          >
            <span>{Recipe.duration} Min</span>
            <span style={{ fontStyle: 'bold', fontSize: 20 }}> | </span>
            <span>{Recipe.nationality}</span>
          </div>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        {
          <div style={styles.ingredients}>
            <h3>Zutaten</h3>
            {ingredientRows}
          </div>
        }

        <div style={styles.preparation}>
          <h3>Zubereitung</h3>
          <p style={{ margin: 10 }}>{Recipe.preparation}</p>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.containerAuthor}>
          <p style={{ margin: 5 }}>
            Autor: <span style={{ fontStyle: 'italic' }}>{Recipe.author}</span>
          </p>
          <p style={{ margin: 5 }}>
            Datum:{' '}
            <span style={{ fontStyle: 'italic' }}>{Recipe.createdAt}</span>
          </p>
        </div>
      </div>
    </PageContainerLayout>
  )
}

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    height: 210,
    border: '1px solid black',
    borderRadius: 3,
  },
  containerTitle: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: 20,
  },
  ingredients: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#b6d7a8ff',
    width: 200,
    borderRadius: 10,
    padding: 10,
  },
  preparation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 600,
    borderRadius: 10,
    padding: 15,
    boxShadow: '0 1px 10px -3px grey',
  },
  separator: {
    marginTop: 40,
    marginBottom: 40,
  },
  containerAuthor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}
