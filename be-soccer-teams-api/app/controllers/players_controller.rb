class PlayersController < ApplicationController
  def index
    @players = Player.all

    render json: @players, include: [:team]
  end

  def show
    @player = Player.find(params[:id])

    render json: @player, include: [:team]
  end

  def create
    @player = Player.create(
      name: params[:id],
      number: params[:number],
      position: params[:position],
      team: params[:team]
    )

    render json: @player
  end
end
