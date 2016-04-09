class ProductsController < ApplicationController
  def index
    @products = Product.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @products }
    end
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product 
    else
      render json: {errors: product.errors.full_messages }
    end
  end

  def destroy
    if Product.find(params[:id]).destroy
      head :ok
    else
      render json: { errors: products.errors.full_messages }
    end
  end

  def product_search
    term = "%#{params[:term].downcase}%"
    @products = Product.where("lower(products.name) LIKE ? OR
                              lower(products.description)::char LIKE ? OR
                              (products.price)::char LIKE ? OR
                              (products.qoh)::char LIKE ?",
                              term, term, term, term )
    render json: @products
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :qoh)
  end

end
