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
    height: 30,
    width: 300,
    padding: 3,
    margin: 10,
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '1px solid black'
  }
};
