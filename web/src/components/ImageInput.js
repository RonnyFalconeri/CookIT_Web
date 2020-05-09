export default class ImageInput extends React.Component {
  render() {
    return (
      <div>
        <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />
        <div style={styles.changeImage}>
          <img src="../../../public/images/cameraIcon.png" style={{ width: 50 }} />
        </div>
      </div>
    )
  }
}

const styles = {
  image: {
    height: 230,
    border: '10px solid white',
    borderRadius: 3,
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
