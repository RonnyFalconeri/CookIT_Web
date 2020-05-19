import PageContainerLayout from 'src/layouts/PageContainerLayout'
import { useState } from 'react'

import EditButton from 'src/components/EditButton'

const RecipePage = ({ id }) => {
  // init recipe data
  const [recipe, setRecipe] = useState({
    image: null,
    title: 'Spaghetti Bolognese',
    duration: '14',
    nationality: 'none',
    ingredients: [
      { amount: '100g', ingredient: 'Spaghetti' },
      { amount: '2', ingredient: 'Zwiebeln' },
      { amount: '5', ingredient: 'Tomaten' },
      { amount: '1', ingredient: 'Knoblauch' },
    ],
    preparation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    author: 'Ronny Falconeri',
    favorite: false,
    createdAt: '15:32 Uhr, 8. Mai 2020',
  })

  // generate ingredient rows
  let ingredientRows = recipe.ingredients.map((row, i) => {
    return (
      <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        <span
          style={{
            textAlign: 'right',
            margin: 5,
            width: 50,
            fontWeight: 'bold',
          }}
        >
          {row.amount}
        </span>
        <span style={{ textAlign: 'left', margin: 5, width: 80 }}>
          {row.ingredient}
        </span>
      </div>
    )
  })

  return (
    <PageContainerLayout title="Rezept">
      <div style={styles.row}>
        <img
          src="../../../public/images/recipeDefaultImage.png"
          style={styles.image}
        />

        <div style={styles.containerTitle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={styles.title}>{recipe.title}</h1>
            <EditButton />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: 200,
            }}
          >
            <span>{recipe.duration} Min</span>
            <span style={{ fontStyle: 'bold', fontSize: 20 }}> | </span>
            <span>{recipe.nationality}</span>
          </div>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.ingredients}>
          <h3>Zutaten</h3>
          {ingredientRows}
        </div>

        <div style={styles.preparation}>
          <h3>Zubereitung</h3>
          <p style={{ margin: 10 }}>{recipe.preparation}</p>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.containerAuthor}>
          <p style={{ margin: 5 }}>
            Autor: <span style={{ fontStyle: 'italic' }}>{recipe.author}</span>
          </p>
          <p style={{ margin: 5 }}>
            Datum:{' '}
            <span style={{ fontStyle: 'italic' }}>{recipe.createdAt}</span>
          </p>
        </div>
      </div>
    </PageContainerLayout>
  )
}

export default RecipePage

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
