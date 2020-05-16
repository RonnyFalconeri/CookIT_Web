export const QUERY = gql`
  query($id: Int!) {
    recipe(id: $id) {
      id
      title
      duration
      ingredients
      preparation
      image
      author
      favorite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ recipe }) => {}
