import PageContainerLayout from 'src/layouts/PageContainerLayout'


const ImpressumPage = () => {

  return (
    <PageContainerLayout title="Impressum">

      <div style={styles.row}>
        <h1>Das sind wir!</h1>
      </div>


    </PageContainerLayout>
  )
}

export default ImpressumPage


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10
  }
};

