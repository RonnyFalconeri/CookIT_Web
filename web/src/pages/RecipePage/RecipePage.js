import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'

const RecipePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.row}>
        <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />

        <div style={styles.containerTitle}>
          <h1 style={styles.title}>Spaghetti bolognese</h1>
          <div>14 Min | ITA</div>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.ingredients}>
          <h3>Zutaten</h3>
          <div style={{ margin: 10 }}>
            <p>100g Spaghetti</p>
            <p>2 Zwiebeln</p>
            <p>5 Tomaten</p>
            <p>1 Knoblauch</p>
          </div>
        </div>

        <div style={styles.preparation}>
          <h3>Zubereitung</h3>
          <p style={{ margin: 10 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.containerAuthor}>
          <p style={{ margin: 5 }}>Autor: <span style={{ fontStyle: 'italic' }}>Ronny Falconeri</span></p>
          <p style={{ margin: 5 }}>Datum: <span style={{ fontStyle: 'italic' }}>15:32 Uhr, 8. Mai 2020</span></p>
        </div>
      </div>

    </DefaultContainerLayout>
  )
}

export default RecipePage

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10
  },
  image: {
    height: 210,
    border: '1px solid black',
    borderRadius: 3
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    margin: 20
  },
  ingredients: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#b6d7a8ff',
    width: 200,
    borderRadius: 10,
    padding: 10
  },
  preparation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 600,
    borderRadius: 10,
    padding: 15,
    boxShadow: '0 1px 10px -3px grey'
  },
  separator: {
    marginTop: 40,
    marginBottom: 40
  },
  containerAuthor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
