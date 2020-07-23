class TeamsController < ApplicationController
  def index
    @teams = Team.all

    render json: @teams
  end

  def show
    @team = Team.find(params[:id])

    render json: @team, include: [:players]
  end
end
