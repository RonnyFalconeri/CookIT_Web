export default class PreparationInput extends React.Component {
  render() {
    return (
      <div style={styles.preparation}>
        <h3>Zubereitung</h3>
        <textarea style={styles.preparationInput} />
      </div>
    )
  }
}

const styles = {
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
  }
};
