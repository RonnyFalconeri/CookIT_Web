import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import FavListItem from 'src/components/FavListItem'

const FavoritePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.list}>

        <FavListItem
          title="Spaghetti Bolognese"
          duration="14"
          nationality="ITA"
        />

      </div>

    </DefaultContainerLayout>
  )
}

export default FavoritePage

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
