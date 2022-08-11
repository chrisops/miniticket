import React from "react"
import PropTypes from "prop-types"
import Ticket from "./Ticket.js"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"

const TicketsPage = (props) => {
  const tickets = props.tickets
  console.log(tickets)
  return (
    <>
      <Container>
        {
          tickets.map((ticket) => <Ticket key={ticket.id} {...ticket} /> )
        }
        <Button>Nice</Button>
      </Container>
    </>
  );
}

TicketsPage.propTypes = {
  tickets: PropTypes.array
};

export default TicketsPage