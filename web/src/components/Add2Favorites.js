export default class Add2Favorites extends React.Component {

  _add2Favorites() {
    //TODO: change 'favorite' in DB
    console.log('to favorites...');
  }

  render() {

    let favIcon = <img
      style={styles.icon}
      src="../../../public/images/addFavoriteIcon1.png"
    />

    if (this.props.favorite) {
      favIcon = <img
        style={styles.icon}
        src="../../../public/images/addFavoriteIcon2.png"
      />
    }

    return (
      <div
        style={styles.container}
        onClick={this.props.onClick}
      >
        {favIcon}
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    cursor: 'pointer',
    top: -80
  },
  icon: {
    height: 50
  }
};
