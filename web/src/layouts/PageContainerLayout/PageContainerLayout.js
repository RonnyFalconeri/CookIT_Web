import { Link, navigate, routes } from '@redwoodjs/router'
import '../../../public/css/styling.css';

const PageContainerLayout = ({ children, title }) => {
  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <a href="/">
          <img src="../../../public/images/backButton.png" style={{ width: 40, position: 'relative', left: -200 }} />
        </a>

        <h1>{title}</h1>
        <a href="/">
          <img src="../../../public/images/icon.png" style={styles.headerIcon} />
        </a>
      </div>

      <main style={styles.mainContent}>{children}</main>

    </div>
  )
}

export default PageContainerLayout

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
    width: '70%',
    margin: '0 auto',
    paddingTop: 10
  }
};

