class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className="center">Hardware Inc</h1>
        <div className="center">
          <a href="/schedules"><button className="btn index-buttons">Schedule</button></a>
          <a href="/products"><button className="btn index-buttons">Inventory</button></a>
        </div>
      </div>
    );
  }
}