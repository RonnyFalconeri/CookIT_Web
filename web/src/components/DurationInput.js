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
    height: 30,
    width: 60,
    padding: 3,
    margin: 10,
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '1px solid black'
  }
};
