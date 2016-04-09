class Employees extends React.Component{
  constructor(props) {
    super(props);
    this.state = { employees: [], shifts: [] };
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    $.ajax({
      url: `/schedules/${id}`,
      type: 'DELETE'
    }).success( employee => {
      let employees = this.state.employees;
      let index = employees.findIndex( e => e.id === employee.id);
      employees.splice(index, 1)
      this.setState({ employees: employees });
    });
  }

  addEmployee(employee) {
    this.setState({ employees: [employee, ...this.state.employees]});
  }

  render() {
    let employees = this.state.employees.map( board => {
      return(<Employee key={`employee-${employee.id}`} {...employee} delete={this.deleteEmployee} />);
    });
    return(
      <div className="row">
        <NewBoard addBoard={this.addEmployee} />
        <h2 className="center">Employee</h2>
        {employees}
      </div>
    );
  }
}