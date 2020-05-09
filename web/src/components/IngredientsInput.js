export default class IngredientsInput extends React.Component {
  render() {
    return (
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
    )
  }
}

const styles = {
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
  }
};
