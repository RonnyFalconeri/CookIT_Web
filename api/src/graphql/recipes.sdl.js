export const schema = gql`
  type Recipe {
    id: Int!
    title: String
    duration: String
    nationality: String
    ingredients: String
    image: String
    author: String
    preparation: String
    favorite: Boolean
    created_at: DateTime
  }

  type Query {
    recipes: [Recipe!]!
  }

  input IngredientInput {
    amount: String
    ingredient: String
  }

  input CreateRecipeInput {
    title: String
    duration: String
    nationality: String
    ingredients: String
    image: String
    author: String
    preparation: String
    favorite: Boolean
  }

  input UpdateRecipeInput {
    title: String
    duration: String
    nationality: String
    ingredients: String
    image: String
    author: String
    preparation: String
    favorite: Boolean
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe!
    updateRecipe(id: Int!, input: UpdateRecipeInput!): Recipe!
    deleteRecipe(id: Int!): Recipe!
  }
`
