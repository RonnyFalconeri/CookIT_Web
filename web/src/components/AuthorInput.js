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
    height: 30,
    width: 200,
    padding: 3,
    margin: 10,
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '1px solid black'
  }
};
