import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'

const FavoritePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.list}>

        <div
          style={styles.listItem}
          onClick={() => navigate(routes.recipes())}
        >
          <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />
          <h2 style={styles.title}>Spaghetti Bolognese</h2>

          <div style={styles.durationColumn}>
            <p style={styles.duration}>14 Min</p>
            <p style={styles.nationality}> ITA</p>
          </div>

        </div>


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
  },
  listItem: {
    margin: 20,
    height: 100,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#8e7cc3',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 4px 0 grey'
  },
  title: {
    color: 'white'
  },
  image: {
    height: 70,
    width: 120,
    border: '1px solid black',
    borderRadius: 3
  },
  durationColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  duration: {
    color: 'white',
    margin: 5
  },
  nationality: {
    color: 'white',
    margin: 5
  }
};