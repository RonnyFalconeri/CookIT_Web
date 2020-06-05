import PageContainerLayout from 'src/layouts/PageContainerLayout'


const ImpressumPage = () => {

  return (
    <PageContainerLayout title="Impressum">

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={styles.container}>
          <h1>CookIT - Web</h1>

          <p style={styles.quote}>"Give a man a meal and you feed him for a day. Teach a man to cook and he will eat for a lifetime."</p>

          <p>Ein Projekt für den Abschluss zum "Bachelor of Science" an der</p>
          <span style={{ margin: 5, fontWeight: 'bold' }}>DHBW Lörrach</span>
          <span>Studiengang "Angewandte Informatik"</span>
          <span>Semester 6, Studienarbeit</span>
          <span>Juni 2020</span>
        </div>

        <div style={styles.container}>
          <h2>Created By</h2>
          <p style={styles.creator}>Ronny "insert nickname" Falconeri<br /><a href="https://github.com/RonnyFalconeri">https://github.com/RonnyFalconeri</a></p>
          <p style={styles.creator}>Jonathan "the cool" Schindler<br /><a href="https://github.com/TheVigil">https://github.com/TheVigil</a></p>
        </div>

        <div style={styles.container}>
          <h2>Dankeschön</h2>
          <p>Ein herzliches Dankeschön geht an</p>
          <div style={styles.thanksto}>
            <span>Claudia Falconeri</span>
            <span>Silan Yüzükan</span>
            <span>Wenjie Wang</span>
          </div>
          <p style={styles.center}>die sich Zeit genommen haben, leckere Rezepte für CookIT zu schreiben. So mancher Hunger wird durch eure Mahlzeiten gestillt.</p>
        </div>

        <div style={styles.container}>
          <h2>Grüße</h2>
          <p style={styles.center}>Schöne Grüße gehen raus an den Kurs TIF17A, dass an seinem letzten Theoriesemester durch die globale Pandemie leider nicht zusammenfinden konnte.</p>
        </div>

        <div style={styles.container}>
          <p style={styles.center}>Dedicated to the George Floyd protests - Black Lives Matter</p>
          <p style={styles.quote}>“I have decided to stick with love. Hate is too great a burden to bear.” <br />– Martin Luther King Jr.</p>
        </div>

      </div>


    </PageContainerLayout>
  )
}

export default ImpressumPage


const styles = {
  container: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  quote: {
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center'
  },
  creator: {
    margin: 5
  },
  thanksto: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    fontStyle: 'italic'
  },
  center: {
    textAlign: 'center'
  }
};

