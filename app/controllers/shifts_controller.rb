class ShiftsController < ApplicationController

  def index
    @shifts = Employee.find(params[:employee_id]).shifts 
  end

  def create
    shift = Employee.find(params[:employee_id]).shifts.new(shift_params)
    if shift.save
      head :ok
    else
      render json:{ errors: shift.errors.full_messages }
    end
  end

  def destroy
    if Shift.find(params[:id]).destroy
      head :ok
    else
      render json: { errors: shift.errors.full_messages }
    end
  end

  private

  def shift_params
    params.require(:shift).permit(:day, :start, :end)
  end
end
