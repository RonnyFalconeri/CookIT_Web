import { routes, navigate } from '@redwoodjs/router'

export default class EditButton extends React.Component {
  render() {

    return (
      <div
        style={styles.container}
        onClick={() => navigate(routes.editRecipe(this.props.data))}
      >
        <img src="../../../public/images/editIcon.png" style={styles.image} />
      </div>
    )
  }
}

const styles = {
  container: {
    cursor: 'pointer'
  },
  image: {
    width: 30
  }
};
