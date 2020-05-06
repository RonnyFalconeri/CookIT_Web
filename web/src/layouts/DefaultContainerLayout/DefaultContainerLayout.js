import '../../../public/css/styling.css';

const DefaultContainerLayout = ({ children }) => {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>CookIT! Web Edition</h1>
          <img src="../../../public/images/icon.png" style={styles.headerIcon} />
        </div>
      </div>

      <main>{children}</main>

      <div style={styles.footer}>
        <p style={styles.footerText}>&copy; Falconeri, Schindler</p>
      </div>

    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#f3f3f3',
    height: '100vh',
    paddingTop: 120
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 110,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    boxShadow: '0 0 8px 0 grey'
  },
  headerIcon: {
    height: 100
  },
  footer: {
    height: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footerText: {
    textAlign: 'center'
  }
};

export default DefaultContainerLayout
