import PageContainerLayout from 'src/layouts/PageContainerLayout'
import FavoritesCell from 'src/components/FavoritesCell'

import FavListItem from 'src/components/FavListItem'

const FavoritePage = () => {
  return (
    <PageContainerLayout title="Favoriten">
      <FavoritesCell />
    </PageContainerLayout>
  )
}

export default FavoritePage

const styles = {
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
