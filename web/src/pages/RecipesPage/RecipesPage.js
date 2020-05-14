import PageContainerLayout from 'src/layouts/PageContainerLayout'
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

    </PageContainerLayout>
  )
}

export default RecipesPage

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
