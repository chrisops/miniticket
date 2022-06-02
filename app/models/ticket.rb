class Ticket < ApplicationRecord

  EMPTY_CREATOR = "System"
  EMPTY_OWNER = "No one"

  belongs_to :creator, class_name: "User", required: false
  belongs_to :owner, class_name: "User", required: false
end
