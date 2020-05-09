export default class AuthorInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Autor"
          style={styles.authorInput}
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        />
      </div>
    )
  }
}

const styles = {
  authorInput: {
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    margin: 10
  }
};
