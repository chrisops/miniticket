class TicketsController < ApplicationController

  def index
    @tickets = Tickets.all
  end


end
