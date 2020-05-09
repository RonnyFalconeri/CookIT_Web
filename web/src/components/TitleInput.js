export default class TitleInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Bezeichung"
        style={styles.titleInput}
        value={this.props.value}
        onChange={event => this.props.onChange(event.target.value)}
      />
    )
  }
}

const styles = {
  titleInput: {
    height: 40,
    width: 300,
    padding: 5,
    borderRadius: 5,
    margin: 10
  }
};
