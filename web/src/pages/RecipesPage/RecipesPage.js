import PageContainerLayout from 'src/layouts/PageContainerLayout'
import RecipiesCell from 'src/components/RecipesCell'

const RecipesPage = () => {
  return (
    <PageContainerLayout title="Rezepte">
      <RecipiesCell />
    </PageContainerLayout>
  )
}

export default RecipesPage
