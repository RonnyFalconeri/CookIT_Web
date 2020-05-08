import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'

const NewRecipePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <img src="../../../public/images/recipeDefaultImage.png" style={styles.image} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ margin: 20 }}>Spaghetti bolognese</h1>
          <div>14 Min | ITA</div>
        </div>

      </div>

    </DefaultContainerLayout>
  )
}

export default NewRecipePage

const styles = {
  image: {
    height: 230,
    border: '1px solid black',
    borderRadius: 3
  }
};
