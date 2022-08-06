# frozen_string_literal: true

class Ticket < ApplicationRecord
  EMPTY_CREATOR = User.new(name: 'System')
  EMPTY_OWNER = User.new(name: 'No one')

  belongs_to :creator, class_name: "User", required: false
  belongs_to :owner, class_name: "User", required: false

  def creator
    super || Ticket::EMPTY_CREATOR
  end

  def owner
    super || Ticket::EMPTY_OWNER
  end
end
