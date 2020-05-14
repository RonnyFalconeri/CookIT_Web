import PageContainerLayout from 'src/layouts/PageContainerLayout'
import FavListItem from 'src/components/FavListItem'

const FavoritePage = () => {
  return (
    <PageContainerLayout title="Favoriten">

      <div style={styles.list}>

        <FavListItem
          title="Spaghetti Bolognese"
          duration="14"
          nationality="ITA"
        />

      </div>

    </PageContainerLayout>
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
