import { Blob } from 'node-fetch'

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

  setImageState(base64data) {
    this.setState({ image_picked: base64data })
    this.props.callback(base64data.split(',')[1])
  }

  blobBase64(blobData, callback) {
    var reader = new FileReader()
    reader.readAsDataURL(blobData)
    reader.onloadend = function () {
      var base64data = reader.result
      console.log(typeof base64data)
      callback(base64data)
    }
  }

  render() {
    let image
    if (this.state.image_passed == null || this.state.image_passed == 'null') {
      image = <img src={this.state.image_default} style={styles.image} />
    } else {
      console.log('image passed: ' + this.state.image_passed)
      console.log(typeof this.state.image_passed)
      console.log(this.state.image_picked)
      image = <img src={this.state.image_passed} style={styles.image} />
    }

    if (this.state.image_picked != null) {
      console.log('image picked: ' + this.state.image_picked)
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
                this.blobBase64(event.target.files[0], this.setImageState)
                this.props.onChange(
                  this.state.image_picked // URL.createObjectURL(event.target.files[0])
                )
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
