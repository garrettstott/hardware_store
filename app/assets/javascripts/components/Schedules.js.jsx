class Schedules extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], shifts: [] }
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: '/get_schedules',
      type: 'GET',
      data: 'JSON'
    }).success( data => {
      this.setState({ employees: data.employees, shifts: data.shifts });
    });  
  }

  deleteEmployee(id) {
    console.log('Delete Employee Hit.')
    $.ajax({
      url: `/schedules/${id}`,
      type: 'DELETE',
      data: 'JSON'
    }).success( index => {
      let employees = this.state.employees;
      employees.splice(index, 1);
      this.setState({ employees: employees });
    });
  }

  addEmployee(employee) {
    console.log('made it');
    this.setState({ employees: [employee, ...this.state.employees]});
  }

  render() {
    let shifts = this.state.shifts.map( shift => {
      return(<Shift key={`shift-${shift.id}`} {...shift} />)
    })
    let employees = this.state.employees.map( employee => {
      return(<Employee key={`employee-${employee.id}`} {...employee} delete={this.deleteEmployee} />);
    });
    return(
      <div className="row">
        <NewEmployee addEmploy={this.addEmployee} />
        <h2 className="center">Employees & Shifts</h2>
        {employees}
        {shifts}
      </div>
    );
  }
}