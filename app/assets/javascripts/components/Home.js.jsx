class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className="center">Hardware Inc</h1>
        <div className="center">
          <a href="/schedules"><button className="btn">Schedule</button></a>
          <a href="/products"><button className="btn">Inventory</button></a>
        </div>
      </div>
    );
  }
}