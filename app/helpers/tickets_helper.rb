module TicketsHelper
  def react_state
    { tickets: @tickets.as_json(include: [:creator, :owner]) }
  end
end
