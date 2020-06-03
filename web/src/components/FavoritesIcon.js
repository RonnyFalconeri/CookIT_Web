export default class FavoritesIcon extends React.Component {
  render() {

    let visible = 'none';
    if (this.props.favorite) {
      visible = 'flex';
    }

    return (
      <div style={styles.container}>
        <img
          style={{ ...styles.icon, ...{ display: visible } }}
          src="../../../public/images/addFavoriteIcon2.png"
        />
      </div>
    )
  }
}

const styles = {
  container: {
    alignSelf: 'flex-end',
    position: 'relative',
    right: 13,
    bottom: -10
  },
  icon: {
    height: 30
  }
};
