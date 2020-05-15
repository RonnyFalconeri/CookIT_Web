import PageContainerLayout from 'src/layouts/PageContainerLayout'
import RecipiesCell from 'src/components/RecipesCell'

import RecipesListItem from 'src/components/RecipesListItem'

const RecipesPage = () => {
  return (
    <PageContainerLayout title="Rezepte">
      <div style={styles.list}>
        <RecipesListItem
          title="Spaghetti Bolognese"
          duration="14"
          nationality="ITA"
        />
      </div>

      <RecipiesCell></RecipiesCell>
    </PageContainerLayout>
  )
}

export default RecipesPage

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
