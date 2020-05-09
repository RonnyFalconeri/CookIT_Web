export default class ImageInput extends React.Component {
  state = {
    image_default: '../../../public/images/recipeDefaultImage.png',
    image_passed: this.props.value,
    image_picked: null
  };

  render() {

    let image;
    if (this.state.image_passed == null) {
      image = <img src={this.state.image_default} style={styles.image} />
    } else {
      image = <img src={this.state.image_passed} style={styles.image} />
    }

    if (this.state.image_picked != null) {
      image = <img src={this.state.image_picked} style={styles.image} />
    }

    return (
      <div>
        {image}

        <label htmlFor="imageInput" style={styles.changeImage}>
          <img src="../../../public/images/cameraIcon.png" style={{ width: 50 }} />
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            name="imageInput"
            style={{ display: 'none' }}
            onChange={event => {
              if (event.target.value.length != 0) {
                this.setState({ image_picked: URL.createObjectURL(event.target.files[0]) });
                this.props.onChange(URL.createObjectURL(event.target.files[0]))
              } else {
                this.setState({ image_picked: null });
                this.props.onChange(null);
              }
            }}
          />
        </label>

      </div>
    )
  }
}

const styles = {
  image: {
    height: 230,
    border: '10px solid white',
    boxShadow: '0 1px 10px -3px grey'
  },
  changeImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#93c47d',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 50,
    right: -360,
    cursor: 'pointer',
    boxShadow: '0 1px 10px -3px grey'
  }
};
