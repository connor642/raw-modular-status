import React, { useState, useEffect } from "react";
import FitText from "react-fittext";
import styled from "styled-components";
import { useInterval } from "../customHooks";
import PropTypes from "prop-types";

/**
 * Date.js - Returns a formatted and auto-scaling date/time formatted element.
 *
 * @param {number} unixStart - The start time to begin counting from.
 */
const DateTime = ({ unixStart }) => {
  const [unix, setUnix] = useState(unixStart);

  /**
   * Every second, add one.
   */
  useInterval(() => {
    setUnix(unix + 1);
  }, 1000);

  /**
   * If the start time changes, then update the state to the new start time.
   */
  useEffect(() => {
    setUnix(unixStart);
  }, [unixStart]);

  const date = new Date(unix * 1000);

  return (
    <Container>
      <FitText compressor={0.5}>
        <div>{date.toLocaleTimeString("en-GB")}</div>
      </FitText>
      <FitText compressor={1}>
        <div>
          {date.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
          })}
        </div>
      </FitText>
    </Container>
  );
};

DateTime.propTypes = {
  unixStart: PropTypes.number.isRequired
};

export default DateTime;

/**
 * Styles, giving a monospace font to prevent movement of text between updates.
 */
const Container = styled.div`
  font-family: var(--font-mono);
  color: var(--accent-colour);
  text-align: center;
  user-select: none;
  * {
    background-color: var(--background-colour);
  }
`;
