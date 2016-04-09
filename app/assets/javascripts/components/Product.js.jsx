class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    id = this.props.id;
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>${this.props.price}</td>
        <td>{this.props.qoh}</td>
        <td><button onClick={() => this.props.deleteProduct(id)} className='btn white-text red darken-2'>Delete</button></td>
      </tr>
    )
  }
}