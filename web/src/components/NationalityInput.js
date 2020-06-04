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
          <option value="ITA">Italienisch</option>
          <option value="TUR">Türkisch</option>
          <option value="FRA">Französisch</option>
          <option value="GER">Deutsch</option>
          <option value="GRE">Griechisch</option>
          <option value="CHI">Chinesisch</option>
          <option value="THA">Thailändisch</option>
          <option value="VNM">Vietnamesisch</option>
          <option value="ESP">Spanisch</option>
          <option value="AFR">Afrikanisch</option>
          <option value="GBR">Britisch</option>
          <option value="ARG">Argentinisch</option>
          <option value="CHE">Schweizerisch</option>
          <option value="RUS">Russisch</option>
          <option value="USA">Amerikanisch</option>
          <option value="BRA">Brasilianisch</option>
          <option value="other">Sonstiges</option>
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
