export default class DurationInput extends React.Component {
  render() {
    return (
      <p>Dauer: <input type="number" style={styles.durationInput} /> Minuten</p>
    )
  }
}

const styles = {
  durationInput: {
    height: 40,
    width: 50,
    padding: 5,
    borderRadius: 5,
    margin: 10
  }
};
