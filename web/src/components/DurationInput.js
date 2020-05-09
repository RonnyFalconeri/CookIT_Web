export default class DurationInput extends React.Component {
  render() {
    return (
      <p>Dauer:
        <input
          type="number"
          style={styles.durationInput}
          min="1"
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        />
      Minuten</p>
    )
  }
}

const styles = {
  durationInput: {
    height: 40,
    width: 60,
    padding: 5,
    borderRadius: 5,
    margin: 10
  }
};
