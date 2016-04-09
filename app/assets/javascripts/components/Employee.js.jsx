class Employee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col s12 m4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{this.props.name}</span>
          </div>
          <div className="card-action center">
            <button onClick={ () => this.props.delete(this.props.id)} className="btn red">Delete</button>
            <a href=`/employee/${this.props.id}` <button className="btn blue">Show</button>>
          </div>
        </div>
      </div> 
    );
  }
}