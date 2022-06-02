class TicketsController < ApplicationController

  def index
    @greeting = { nice: "meme" }
    @tickets = Ticket.all
  end


end
