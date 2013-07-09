class TracksController < ApplicationController
  def index
    base = "http://ws.audioscrobbler.com/2.0/"
    username = params[:username]
    uri = URI.parse("#{base}?method=user.getrecenttracks&user=#{username}&api_key=#{ENV["LAST_FM_API_KEY"]}&format=json")
    response = Net::HTTP.get_response(uri)
    
    respond_to do |format|
      format.html {}
      format.json { render json: response.body }
    end

  end
end