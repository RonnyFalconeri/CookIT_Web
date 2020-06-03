import PageContainerLayout from 'src/layouts/PageContainerLayout'
import RecipesCell from 'src/components/RecipesCell'

const RecipesPage = () => {
  return (
    <PageContainerLayout title="Rezepte">
      <RecipesCell />
    </PageContainerLayout>
  )
}

export default RecipesPage
