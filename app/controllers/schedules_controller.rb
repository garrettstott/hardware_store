class SchedulesController < ApplicationController
  def index

  end

  def create

    employee = Employee.new(employee_params)
    if employee.save
      render json: employee
    else
      render json: { errors: employee.errors.full_messages }
    end
  end

  def destroy
    if Employee.find(params[:id]).destroy
      render json: { id: params[:id].to_i }
    else
      render json: { errors: "Employee can't be deleted. Try again." }
    end
  end

  def get_schedules
    @employees = Employee.all.order("created_at DESC")
    @shifts = Shift.all
    schedule = {
      employees: @employees,
      shifts: @shifts
    }
    render json: schedule
  end

  private
    def employee_params
      params.require(:employee).permit(:name)
    end
end
