import { routes, navigate } from '@redwoodjs/router'
import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'

const HomePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.row}>

        <div
          style={{ ...styles.listItem, ...{ backgroundColor: '#6d9eeb' } }}
          onClick={() => navigate(routes.recipes())}
        >
          <h2 style={styles.listItemLabel}>Rezepte</h2>
        </div>

        <div
          style={{ ...styles.listItem, ...{ backgroundColor: '#93c47d' } }}
          onClick={() => navigate(routes.newRecipe())}
        >
          <h2 style={styles.listItemLabel}>Neues Rezept</h2>
        </div>

        <div
          style={{ ...styles.listItem, ...{ backgroundColor: '#8e7cc3' } }}
          onClick={() => navigate(routes.favorites())}
        >
          <h2 style={styles.listItemLabel}>Favoriten</h2>
        </div>

        <div
          style={{ ...styles.listItem, ...{ backgroundColor: '#f6b26b' } }}
          onClick={() => navigate(routes.randomrecipe())}
        >
          <h2 style={styles.listItemLabel}>Zufällig</h2>
        </div>

        <div
          style={{ ...styles.listItem, ...{ backgroundColor: '#dd7e6b' } }}
          onClick={() => navigate(routes.impressum())}
        >
          <h2 style={styles.listItemLabel}>Impressum</h2>
        </div>

      </div>

      <p style={{ textAlign: 'center' }}>&copy; Falconeri, Schindler</p>

    </DefaultContainerLayout>
  )
}

export default HomePage

const styles = {
  listItem: {
    margin: 20,
    height: '65vh',
    width: 280,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 4px 0 grey'
  },
  listItemLabel: {
    color: 'white'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
};
