import React from "react"
import PropTypes from "prop-types"

const Ticket = (props) => {
  const { id, subject, body, status, created_at, updated_at, creator, owner } = { ...props }
  return (
    <>
      <h2>{subject}</h2>
      <h4>Status: {status}</h4>
      <h3>Created by: {creator.name}</h3>
      <h3>Assigned to: {owner.name}</h3>
      <p>{body}</p>
    </>
  );
}

// <% @tickets.each do |ticket| %>
//   <h2><%= ticket.subject %></h2>
//   <h3>Created by: <%= ticket.creator[:name] %>
//   <h3>Assigned to: <%= ticket.owner[:name] %></h3>
//   <h4>Status: <%= ticket.status %></h4>
//   <p><%= ticket.body %></p>
// <% end %></h3>

Ticket.propTypes = {
  ticket: PropTypes.array
};

export default Ticket