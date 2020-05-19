import { routes, navigate } from '@redwoodjs/router'

import RecipesListItem from 'src/components/RecipesListItem'

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
  return recipes.map((recipe) => (
    // eslint-disable-next-line react/jsx-key
    <div
      style={styles.list}
      onClick={() => navigate(routes.recipe({ id: recipe.id }))}
    >
      <RecipesListItem
        key={recipe.id}
        title={recipe.title}
        duration={recipe.duration}
        nationality={recipe.preparation}
      />
    </div>
  ))
}

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
