class Api::TodosController < ApiController
  before_action :set_todo, only: [:show, :update, :destroy]

  def index
    @todos = Todo.all
    if params[:completed]
      completed = params[:completed].downcase == "true"
      @todos = @todos.where(completed: completed)
    end

    render json: @todos
  end

  def show
    render json: @todo
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo, status: :created
  end

  def update
    @todo.update_attributes!(todo_params)
    render json: @todo
  end

  def destroy
    @todo.destroy
    head :no_content 
  end

  private

  def set_todo
    todo_id = params[:id].to_i
    @todo = Todo.find(todo_id)
  end

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
