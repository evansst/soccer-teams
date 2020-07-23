class PlayersController < ApplicationController
  def index
    @players = if params[:name]
                 Player.where('name LIKE ?', "%#{params['name']}%")
               else
                 Player.all
               end

    render json: @players, include: [:team]
  end

  def show
    @player = Player.find(params[:id])

    render json: @player, include: [:team]
  end

  def create
    @player = Player.create(
      name: params[:name],
      number: params[:number],
      position: params[:position],
      team_id: params[:team_id]
    )

    render json: @player
  end
end
