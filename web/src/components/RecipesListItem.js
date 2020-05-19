// import { routes, navigate } from '@redwoodjs/router'

export default class RecipesListItem extends React.Component {
  render() {
    return (
      <div style={styles.listItem}>
        <img
          src="../../../public/images/recipeDefaultImage.png"
          style={styles.image}
        />
        <h2 style={styles.title}>{this.props.title}</h2>

        <div style={styles.durationColumn}>
          <p style={styles.duration}>{this.props.duration} Min</p>
          <p style={styles.nationality}>{this.props.nationality}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  listItem: {
    margin: 20,
    height: 100,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#6d9eeb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 4px 0 grey',
  },
  title: {
    color: 'white',
    width: 450,
    textAlign: 'center',
  },
  image: {
    height: 70,
    width: 120,
    border: '1px solid black',
    borderRadius: 3,
  },
  durationColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  duration: {
    color: 'white',
    margin: 5,
  },
  nationality: {
    color: 'white',
    margin: 5,
  },
}
