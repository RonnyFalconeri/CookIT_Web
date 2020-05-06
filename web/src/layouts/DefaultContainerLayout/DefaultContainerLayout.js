const DefaultContainerLayout = ({ children }) => {
  return (
    <div>

      <div style={{ width: '100%', height: 100, backgroundColor: 'red', textAlign: 'center' }}>
        <h1>CookIT! Web Edition</h1>
      </div>

      <main>{children}</main>

      <p>&copy; Falconeri, Schindler</p>
    </div>
  )
}

export default DefaultContainerLayout
