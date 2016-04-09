class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee(e) {
    e.preventDefault();
    let name = this.refs.name;
    $.ajax({
      url: '/schedules',
      type: 'POST',
      data: { employee: {name: name.value } },
      dataType: 'JSON',
    }).success( employee => {
      this.props.addEmploy(employee);
    }).error( errors => {
      alert(errors)
    }).complete( () => {
      name.value = null;
    });
  }

  render() {
    return(
      <div className="col s12 m10 offset-m1">
        <h4>Add A New Employee</h4>
        <form onSubmit={this.addEmployee} >
          <input placeholder="Name" ref="name" required={true} />
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}