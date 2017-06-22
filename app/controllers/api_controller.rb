class ApiController < ApplicationController
  protect_from_forgery with: :null_session

  rescue_from Exception, with: :handle_500
  rescue_from ActiveRecord::RecordNotFound, with: :handle_404

  def handle_404(e = nil)
    if e
      render json: { error: e.message }, status: :not_found
    else
      head :not_found
    end
  end

  private

  def handle_500(e = nil)
    if e
      render json: { error: e.message }, status: :internal_server_error
    else
      head :internal_server_error
    end
  end
end
