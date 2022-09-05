require "amazing_print"

Rails.application.configure do
  console do
    AmazingPrint.irb!
  end
end
