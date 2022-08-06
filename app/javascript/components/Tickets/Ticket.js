import React from "react"
import PropTypes from "prop-types"

const Ticket = (props) => {
  const { id, subject, body, status, created_at, updated_at } = { ...props }
  return (
    <>
      <h2>{subject}</h2>
    </>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.array
};

export default Ticket