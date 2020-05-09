import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import TitleInput from 'src/components/TitleInput'

const NewRecipePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.row}>
        <div>
          <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />
          <div style={styles.changeImage}>
            <img src="../../../public/images/cameraIcon.png" style={{ width: 50 }} />
          </div>
        </div>

        <div style={styles.containerTitle}>
          <TitleInput />
          <p>Dauer: <input type="number" style={styles.durationInput} /> Minutes</p>
          <p>Nationality:
          <select style={styles.nationalityInput}>
              <option value="none">Keine</option>
              <option value="ger">Deutsch</option>
              <option value="ita">Italienisch</option>
              <option value="gre">Griechisch</option>
              <option value="chi">Chinesisch</option>
              <option value="tur">Türkisch</option>
            </select>
          </p>
        </div>

      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.ingredients}>
          <h3>Zutaten</h3>
          <div style={styles.ingredientsRow}>
            <input type="text" placeholder="Menge" style={styles.ingredientsInput} />
            <input type="text" placeholder="Zutat" style={styles.ingredientsInput} />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={styles.delRow}>-</div>
            <div style={styles.addRow}>+</div>
          </div>
        </div>

        <div style={styles.preparation}>
          <h3>Zubereitung</h3>
          <textarea style={styles.preparationInput} />
        </div>
      </div>

      <div style={styles.separator}>
        <hr />
      </div>

      <div style={styles.row}>
        <div style={styles.containerAuthor}>
          <input type="text" placeholder="Autor" style={styles.authorInput} />
        </div>
      </div>

      <div style={styles.row}>
        <input type="button" value="Speichern" style={styles.saveButton} />
      </div>

    </DefaultContainerLayout>
  )
}

export default NewRecipePage

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10
  },
  image: {
    height: 230,
    border: '10px solid white',
    borderRadius: 3,
    boxShadow: '0 1px 10px -3px grey'
  },
  changeImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#93c47d',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 50,
    right: -360,
    cursor: 'pointer',
    boxShadow: '0 1px 10px -3px grey'
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleInput: {
    height: 40,
    width: 300,
    padding: 5,
    borderRadius: 5,
    margin: 10
  },
  durationInput: {
    height: 40,
    width: 50,
    padding: 5,
    borderRadius: 5,
    margin: 10
  },
  nationalityInput: {
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    margin: 10
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
  ingredientsRow: {
    display: 'flex',
    margin: 5
  },
  ingredientsInput: {
    width: 75,
    height: 30,
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  delRow: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    cursor: 'pointer'
  },
  addRow: {
    height: 20,
    width: 20,
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    cursor: 'pointer'
  },
  preparation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  preparationInput: {
    width: 600,
    height: 100,
    borderRadius: 5,
    border: 'none',
    boxShadow: '0 1px 10px -3px grey'
  },
  separator: {
    marginTop: 40,
    marginBottom: 40
  },
  authorInput: {
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    margin: 10
  },
  saveButton: {
    width: 170,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#93c47d',
    border: '1px solid grey',
    boxShadow: 'none'
  }
};
