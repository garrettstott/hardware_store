class Products extends React.Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.addToProducts = this.addToProducts.bind(this);
    this.state = { products: this.props.products };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.productSearch = this.productSearch.bind(this);
    this.searchProduct = this.searchProduct.bind(this);

  }

  searchProduct() {
    $.ajax({
      url: '/products/product_search',
      type: 'GET',
      data: {term: this.refs.search.value}
    }).done( data => {
      this.setState({ products: data });
    }).fail( error => {
      console.log(error);
    });
  }

  productSearch() {
    return(<div className="col s12 m4">
             <h5>Search</h5>
             <input onKeyUp={this.searchProduct} ref="search" type="text" placeholder="Search Products by Name" />
           </div>
    );
  }

  deleteProduct(id) {
    $.ajax({
      url: `/products/${id}`,
      type: 'DELETE'
    }).done( product => {
      let products = this.state.products;
      let index = products.findIndex( p => p.id === product.id );
      products.splice(index, 1);
      this.setState({ products: products });
    }).fail( error => {
      console.log(error);
    });
  }

  addToProducts(product) {
    this.setState({ products: [product, ...this.state.products]});
  }

  addProduct(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let price = this.refs.price.value;
    let qoh = this.refs.qoh.value;
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: {name: name,
                  description: description,
                  price: price, 
                  qoh: qoh} },
      dataType: 'JSON'
    }).done( product => {
      this.addToProducts(product);
      this.refs.name.value = null;
      this.refs.description.value = null;
      this.refs.price.value = null;
      this.refs.qoh.value = null;
    }).fail( error => {
      console.log(error);
    })
  }

  render() {
    let products = this.state.products.map( product => {
      return(<Product key={`product-${product.id}`} {...product}
                deleteProduct = {this.deleteProduct}/>);
    });
    return(
      <div className="col s12 m4">
        <div className="row">
          <div className="add-product-div col s12 m4 offset-m1">
            <h5>Add New Product</h5>
            <form onSubmit={this.addProduct} className="product-form">
              <input type="text" ref="name" placeholder="Name" />
              <input type="text" ref="description" placeholder="Description" />
              <input type="text" ref="price" placeholder="Price" />
              <input type="text" ref="qoh" placeholder="Quantity On Hand" />
              <input type="submit" className="btn" name="Submit" />
            </form>
          </div> 
          <div className="col s12 m4 offset-m1">
            <h1 className="center">Inventory</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
          {this.productSearch()}
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
                {products}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
