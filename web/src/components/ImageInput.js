/**
 *
 *
 * This class is used to manipulate blob objects for the displaying of images associated with a recipe.
 * Unfortunately this feature cannont be used at this time, as GraphQL handles base64 strings needed to display
 * Images poorly, leading to crashes with a 431 error. Because the prototype uses a local database instead of a CDN,
 * Default images are hardcoded and this class remains (mostly) unused. However, this could be quickly implemented together with
 * a CDN to allow for dynamic images.
 *
 *
 */

export default class ImageInput extends React.Component {
  constructor(props) {
    super(props)
    this.setImageState = this.setImageState.bind(this)
  }
  state = {
    image_default: '../../../public/images/recipeDefaultImage.png',
    image_passed: this.props.value,
    image_picked: null,
  }

  // setImageState and blobBase64 convert blob data to base64 and pass it to the state, see above docstring for more commentary.
  setImageState(base64data) {
    this.setState({ image_picked: base64data })
    this.props.callback(base64data.split(',')[1])
  }

  blobBase64(blobData, callback) {
    var reader = new FileReader()
    reader.readAsDataURL(blobData)
    reader.onloadend = function () {
      var base64data = reader.result
      callback(base64data)
    }
  }

  render() {
    let image
    if (this.state.image_passed == null || this.state.image_passed == 'null') {
      image = <img src={this.state.image_default} style={styles.image} />
    } else {
      image = <img src={this.state.image_passed} style={styles.image} />
    }

    if (this.state.image_picked != null) {
      image = <img src={this.state.image_picked} style={styles.image} />
    }

    return (
      <div style={{ height: 240 }}>
        {image}

        <label htmlFor="imageInput" style={styles.changeImage}>
          <img
            src="../../../public/images/cameraIcon.png"
            style={{ width: 50 }}
          />
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            name="imageInput"
            style={{ display: 'none' }}
            onChange={(event) => {
              if (event.target.value.length != 0) {
                alert('Images cannot be added at this time!') // we don't have a CDN, images are hardcoded at this time.
              } else {
                this.setState({ image_picked: null })
                this.props.onChange(null)
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
    boxShadow: '0 1px 10px -3px grey',
  },
  changeImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#93c47d',
    padding: 5,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    bottom: 50,
    right: -350,
    cursor: 'pointer',
    boxShadow: '0 1px 10px -3px grey',
  },
}
