import { routes, navigate } from '@redwoodjs/router'

import FavListItem from 'src/components/FavListItem'

/**
 *
 * This cell gets the favorite recipes of the user out of the db and displays them in a list.
 *
 */

// query all recipes in the db for filtering
export const QUERY = gql`
  query {
    recipes {
      id
      title
      duration
      ingredients
      preparation
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
  // Filter the recipes that have been flagged as favorites and place them in an array,
  // GraphQL queries don't easily allow for complex filtering in the query.
  var favs = []
  recipes.forEach((recipe) => {
    for (const key in recipe) {
      if (recipe.hasOwnProperty(key) && key == 'favorite') {
        const fav = recipe[key]
        if (fav) {
          favs.push(recipe)
          break
        }
      }
    }
  })

  recipes.sort((a, b) => a.title.localeCompare(b.title)) // sort alphabetically

  // map the favorites to FavListItem components
  return favs.map((favorite) => (
    // eslint-disable-next-line react/jsx-key
    <div
      key={favorite.id}
      style={styles.list}
      onClick={() => navigate(routes.recipe({ id: favorite.id }))}
    >
      <FavListItem
        key={favorite.id}
        title={favorite.title}
        duration={favorite.duration}
        nationality={favorite.nationality}
      />
    </div>
  ))
}

const styles = {
  listItem: {
    margin: 20,
    height: 100,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#8e7cc3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 4px 0 grey',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    width: 450,
    textAlign: 'center',
  },
  image: {
    height: 70,
    width: 120,
    border: '1px solid black',
    borderRadius: 3,
  },
  durationColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  duration: {
    color: 'white',
    margin: 5,
  },
  nationality: {
    color: 'white',
    margin: 5,
  },
}
