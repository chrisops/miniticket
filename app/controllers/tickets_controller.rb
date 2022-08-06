class TicketsController < ApplicationController

  def index
    @tickets = Ticket.all
  end

  def react_state
    { tickets: @tickets.as_json(include: [:creator, :owner]) }
  end
end
