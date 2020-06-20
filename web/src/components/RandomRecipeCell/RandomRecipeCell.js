import { routes, navigate } from '@redwoodjs/router'
import PageContainerLayout from 'src/layouts/PageContainerLayout'
import { useState } from 'react'

export const QUERY = gql`
  query {
    recipes {
      id
      title
      duration
      nationality
      image
      author
      favorite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipes }) => {
  /**
   *  Creating a randomized GraphQL query from scratch is a bit of a headache. Instead we grab the full
   *  DB, using the length of the response as the ceiling for a randomized number. Grab the recipe with
   *  the ID matching the random number, and render it to the page.
   *
   */

  // generate a random integer between min and max, inclusive
  function getRandomInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let responseLength = 0
  let recipesHolder = []
  recipes.forEach((element) => {
    responseLength = responseLength + 1 // seed for generating the random number
    recipesHolder.push(element)
  })

  let random = getRandomInclusive(1, responseLength)

  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    duration: '',
    nationality: '',
    image: '',
    author: '',
    favorite: '',
  })

  // grab a random recipe
  for (const key in recipesHolder[random]) {
    if (recipesHolder[random].hasOwnProperty(key)) {
      recipe[key] = recipesHolder[random][key]
    }
  }

  return (
    <PageContainerLayout title="Zufälliges Rezept">
      <div style={styles.row}>
        <img
          src="../../../public/images/recipeDefaultImage.png"
          style={styles.image}
        />

        <div style={styles.containerTitle}>
          <h1 style={styles.title}>{recipe.title}</h1>

          <div style={styles.moreInfo}>
            <span>{recipe.duration} Min</span>
            <span style={{ fontStyle: 'bold', fontSize: 20 }}> | </span>
            <span>{recipe.nationality}</span>
          </div>
        </div>
      </div>

      <div style={styles.row2}>
        <input
          type="button"
          value="Kochen!"
          style={styles.letscook}
          onClick={() => navigate(routes.recipe({ id: recipe.id }))}
        />

        <input
          type="button"
          value="Weiter"
          style={styles.next}
          onClick={() => window.location.reload()} // save time and extra logic by just reloading the page
        />
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
  row2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
    height: 170,
  },
  moreInfo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
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
  letscook: {
    width: 200,
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f6b26b',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  next: {
    width: 150,
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'lightgrey',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}
