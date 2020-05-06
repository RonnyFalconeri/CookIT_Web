import '../../../public/css/styling.css';

const DefaultContainerLayout = ({ children }) => {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1>CookIT! Web Edition</h1>
        <img src="../../../public/images/icon.png" style={styles.headerIcon} />
      </div>

      <main>{children}</main>

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
    alignItems: 'center',
    height: 110,
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    boxShadow: '0 0 8px 0 grey'
  },
  headerIcon: {
    height: 100
  }
};

export default DefaultContainerLayout
