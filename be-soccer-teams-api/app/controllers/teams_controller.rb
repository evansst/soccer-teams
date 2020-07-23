class TeamsController < ApplicationController
  def index
    @teams = Team.all

    render json: @teams
  end

  def show
    @team = Team.find(params[:id])

    render json: @team, include: [:players]
  end

  def create
    @team = Team.create(
      name: params[:name]
    )

    render json: @team
  end
end
