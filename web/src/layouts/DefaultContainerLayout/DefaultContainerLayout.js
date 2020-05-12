import { Link, routes } from '@redwoodjs/router'
import '../../../public/css/styling.css';

const DefaultContainerLayout = ({ children }) => {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1>CookIT! Web Edition</h1>
        <Link to={routes.home()}>
          <img src="../../../public/images/icon.png" style={styles.headerIcon} />
        </Link>
      </div>

      <main style={styles.mainContent}>{children}</main>

    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#f3f3f3',
    minHeight: '100vh',
    paddingTop: 120
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    position: 'fixed',
    backgroundColor: 'white',
    top: 0,
    boxShadow: '0 0 8px 0 grey',
    zIndex: 9999
  },
  headerIcon: {
    height: 100
  },
  mainContent: {
    width: '95%',
    margin: '0 auto',
    paddingTop: 10
  }
};

export default DefaultContainerLayout
