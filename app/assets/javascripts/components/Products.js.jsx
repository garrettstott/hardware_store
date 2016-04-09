class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col s12 m4">
        <h1 className="center">Inventory</h1>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>QOH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                </tr>
                <tr>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
