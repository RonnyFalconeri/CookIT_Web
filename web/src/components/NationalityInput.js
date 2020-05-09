export default class NationalityInput extends React.Component {
  render() {
    return (
      <p>Nationalität:
        <select
          style={styles.nationalityInput}
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        >
          <option value="none">Keine</option>
          <option value="ger">Deutsch</option>
          <option value="ita">Italienisch</option>
          <option value="gre">Griechisch</option>
          <option value="chi">Chinesisch</option>
          <option value="tur">Türkisch</option>
        </select>
      </p>
    )
  }
}

const styles = {
  nationalityInput: {
    height: 40,
    width: 200,
    padding: 5,
    borderRadius: 5,
    margin: 10
  }
};
