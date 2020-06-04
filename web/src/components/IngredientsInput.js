export default class IngredientsInput extends React.Component {
  state = {
    ingredients: [],
    delRowVisible: 'none'
  };

  constructor(props) {
    super(props);
    let visible = 'none';
    if (props.ingredients.length > 1) {
      visible = 'flex';
    }

    this.state = {
      ingredients: props.ingredients,
      delRowVisible: visible
    };

  }


  _handleAmountInput(index, value) {
    this.setState(prevState => {
      let ingredients = [...prevState.ingredients];
      ingredients[index] = {
        amount: value,
        ingredient: ingredients[index]['ingredient']
      };
      return { ingredients }
    }, () => this.props.onChange(this.state.ingredients));
  }

  _handleIngredientInput(index, value) {
    this.setState(prevState => {
      let ingredients = [...prevState.ingredients];
      ingredients[index] = {
        amount: ingredients[index]['amount'],
        ingredient: value
      };
      return { ingredients }
    }, () => this.props.onChange(this.state.ingredients));
  }

  _addRow() {
    this.setState(prevState => {
      let ingredients = [...prevState.ingredients];
      ingredients.push({ amount: '', ingredient: '' });
      return { ingredients }
    }, () => {

      if (this.state.ingredients.length > 1) {
        this.setState({ delRowVisible: 'flex' });
      }
    });
  }

  _deleteRow() {
    if (this.state.ingredients.length > 1) {
      this.setState(prevState => {
        let ingredients = [...prevState.ingredients];
        ingredients.pop();
        return { ingredients }
      }, () => {
        this.props.onChange(this.state.ingredients);

        // if 1 row left -> hide delRow button
        if (this.state.ingredients.length == 1) {
          this.setState({ delRowVisible: 'none' });
        }
      });
    }
  }


  render() {

    let rows = [];
    for (let i = 0; i <= this.state.ingredients.length - 1; i++) {
      rows.push(
        <div style={styles.ingredientsRow} key={i}>
          <input
            type="text"
            placeholder="Menge"
            value={this.state.ingredients[i].amount}
            style={styles.ingredientsInput}
            onChange={event => this._handleAmountInput(i, event.target.value)}
          />
          <input
            type="text"
            placeholder="Zutat"
            value={this.state.ingredients[i].ingredient}
            style={styles.ingredientsInput}
            onChange={event => this._handleIngredientInput(i, event.target.value)}
          />
        </div>
      );
    }

    return (
      <div style={styles.ingredients}>
        <h3>Zutaten</h3>
        {rows}
        <div style={{ display: 'flex' }}>
          <div style={{ ...styles.delRow, ...{ display: this.state.delRowVisible } }} onClick={() => this._deleteRow()}>-</div>
          <div style={styles.addRow} onClick={() => this._addRow()}>+</div>
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
    width: 300,
    borderRadius: 10,
    padding: 10
  },
  ingredientsRow: {
    display: 'flex',
    margin: 5
  },
  ingredientsInput: {
    height: 30,
    width: 130,
    padding: 3,
    margin: 5,
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '1px solid black'
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
