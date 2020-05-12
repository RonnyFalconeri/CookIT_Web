import { routes, navigate } from '@redwoodjs/router'
import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import HomeListItem from 'src/components/HomeListItem'

const HomePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.row}>

        <HomeListItem
          title="Rezepte"
          color="#6d9eeb"
          onClick={() => navigate(routes.recipes())}
        />

        <HomeListItem
          title="Neues Rezept"
          color="#93c47d"
          onClick={() => navigate(routes.newRecipe())}
        />

        <HomeListItem
          title="Favoriten"
          color="#8e7cc3"
          onClick={() => navigate(routes.favorites())}
        />

        <HomeListItem
          title="Zufällig"
          color="#f6b26b"
          onClick={() => navigate(routes.randomrecipe())}
        />

        <HomeListItem
          title="Impressum"
          color="#dd7e6b"
          onClick={() => navigate(routes.impressum())}
        />


      </div>

      <p style={{ textAlign: 'center' }}>&copy; Falconeri, Schindler</p>

    </DefaultContainerLayout>
  )
}

export default HomePage

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
};
