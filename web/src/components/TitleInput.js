export default class TitleInput extends React.Component {
  render() {
    return (
      <input type="text" placeholder="Bezeichung" style={styles.titleInput} />
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
