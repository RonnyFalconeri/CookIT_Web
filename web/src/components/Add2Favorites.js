export default class Add2Favorites extends React.Component {
  constructor(props) {
    super(props)
    this._handleFavoriteInput = this._handleFavoriteInput.bind(this)
  }

  _handleFavoriteInput(fav) {
    fav = this.props.favorite
    console.log('Props fav value ' + fav)
    if (fav) {
      fav = false
    } else {
      fav = true
    }
    this.props.callback(fav) // pass change up
  }

  render() {
    let favIcon = (
      <img
        style={styles.icon}
        src="../../../public/images/addFavoriteIcon1.png"
      />
    )

    if (this.props.favorite) {
      favIcon = (
        <img
          style={styles.icon}
          src="../../../public/images/addFavoriteIcon2.png"
        />
      )
    }

    return (
      <div style={styles.container} onClick={this._handleFavoriteInput}>
        {favIcon}
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    cursor: 'pointer',
    top: -80,
  },
  icon: {
    height: 50,
  },
}
