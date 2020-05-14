import PageContainerLayout from 'src/layouts/PageContainerLayout'
import { routes, navigate } from '@redwoodjs/router'
import { useState, useEffect } from 'react'


const RandomrecipePage = () => {

  // init recipe data
  const [recipe, setRecipe] = useState({
    id: null,
    image: null,
    title: 'Spaghetti Bolognese',
    duration: '14',
    nationality: 'ita',
    author: 'Ronny Falconeri',
    favorite: false,
  });


  useEffect(() => {
    // runs at first
    // TODO: load random recipe from DB
  });


  // load random recipe from DB
  const _getRandomRecipe = () => {
    // TODO: load random recipe from DB, of course

    let recipe = {
      id: null,
      image: null,
      title: 'Spaghetti Carbonara',
      duration: '13',
      nationality: 'ita',
      author: 'Claudia Falconeri',
      favorite: false,
    };
    setRecipe(recipe);
  }

  return (
    <PageContainerLayout title="Zufälliges Rezept">

      <div style={styles.row}>
        <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />

        <div style={styles.containerTitle}>

          <h1 style={styles.title}>{recipe.title}</h1>

          <div style={styles.moreInfo}>
            <span>{recipe.duration} Min</span>
            <span style={{ fontStyle: 'bold', fontSize: 20 }}> | </span>
            <span>{recipe.nationality}</span>
          </div>

        </div>
      </div>

      <div style={styles.row2}>
        <input
          type="button"
          value="Kochen!"
          style={styles.letscook}
          onClick={() => navigate(routes.recipe())}
        />

        <input
          type="button"
          value="Weiter"
          style={styles.next}
          onClick={() => _getRandomRecipe()}
        />
      </div>

    </PageContainerLayout>
  )
}

export default RandomrecipePage


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10
  },
  row2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
    height: 170
  },
  moreInfo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200
  },
  image: {
    height: 210,
    border: '1px solid black',
    borderRadius: 3
  },
  containerTitle: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    margin: 20
  },
  letscook: {
    width: 200,
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f6b26b',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  next: {
    width: 150,
    height: 50,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'lightgrey',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

