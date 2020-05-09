import DefaultContainerLayout from 'src/layouts/DefaultContainerLayout'
import TitleInput from 'src/components/TitleInput'
import DurationInput from 'src/components/DurationInput'
import NationalityInput from 'src/components/NationalityInput'
import ImageInput from 'src/components/ImageInput'
import IngredientsInput from 'src/components/IngredientsInput'
import PreparationInput from 'src/components/PreparationInput'
import AuthorInput from 'src/components/AuthorInput'

const NewRecipePage = () => {
  return (
    <DefaultContainerLayout>

      <div style={styles.row}>

        <ImageInput />

        <div style={styles.containerTitle}>
          <TitleInput />
          <DurationInput />
          <NationalityInput />
        </div>

      </div>

      <div style={styles.separator}><hr /></div>

      <div style={styles.row}>
        <IngredientsInput />
        <PreparationInput />
      </div>

      <div style={styles.separator}><hr /></div>

      <div style={styles.row}>
        <AuthorInput />
      </div>

      <div style={styles.row}>
        <input type="button" value="Speichern" style={styles.saveButton} />
      </div>

    </DefaultContainerLayout>
  )
}

export default NewRecipePage

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  separator: {
    marginTop: 40,
    marginBottom: 40
  },
  saveButton: {
    width: 170,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#93c47d',
    border: '1px solid grey',
    boxShadow: 'none'
  }
};
