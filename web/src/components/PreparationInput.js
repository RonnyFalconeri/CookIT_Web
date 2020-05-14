export default class PreparationInput extends React.Component {
  render() {
    return (
      <div style={styles.preparation}>
        <h3>Zubereitung</h3>
        <textarea
          style={styles.preparationInput}
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        />
      </div>
    )
  }
}

const styles = {
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
  preparationInput: {
    width: 600,
    height: 100,
    border: 'none',
  }
};
