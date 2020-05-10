import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import RecipesListItem from 'src/components/RecipesListItem'

const RecipesPage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.list}>

        <RecipesListItem
          title="Spaghetti Bolognese"
          duration="14"
          nationality="ITA"
        />


      </div>

    </DefaultContainerLayout>
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
