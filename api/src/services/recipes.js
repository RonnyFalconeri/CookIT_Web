import { db } from 'src/lib/db'

export const recipes = () => {
  return db.recipe.findMany()
}

export const recipe = ({ id }) => {
  console.log('RECIPE ID ' + id)
  return db.recipe.findOne({
    where: { id: id },
  })
}

export const createRecipe = ({ input }) => {
  return db.recipe.create({ data: input })
}

export const updateRecipe = ({ id, input }) => {
  return db.recipe.update({
    data: input,
    where: { id: id },
  })
}

export const deleteRecipe = ({ id }) => {
  return db.recipe.delete({
    where: { id: id },
  })
}
