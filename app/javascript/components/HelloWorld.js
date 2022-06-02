import React from "react"
import PropTypes from "prop-types"

const HelloWorld = (props) => {
  return (
    <>
      {props.nice}
    </>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
