export default class HomeListItem extends React.Component {
  render() {
    return (
      <div
        style={{ ...styles.listItem, ...{ backgroundColor: this.props.color } }}
        onClick={this.props.onClick}
      >
        <h2 style={styles.listItemLabel}>{this.props.title}</h2>
      </div>
    )
  }
}

const styles = {
  listItem: {
    margin: 20,
    height: '65vh',
    width: 280,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    cursor: 'pointer',
    boxShadow: '0 4px 4px 0 grey'
  },
  listItemLabel: {
    color: 'white'
  }
};
