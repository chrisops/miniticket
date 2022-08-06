import React from "react"
import PropTypes from "prop-types"
import Ticket from "./Ticket.js"

const TicketsPage = (props) => {
  const tickets = props.tickets
  console.log(tickets)
  return (
    <>
      {
        tickets.map((ticket) => <Ticket {...ticket} /> )
      }
    </>
  );
}

TicketsPage.propTypes = {
  tickets: PropTypes.array
};

export default TicketsPage