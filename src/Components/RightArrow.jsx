import React from "react";
import styled from "styled-components";
import rightArrow from "../img/right-arrow.svg";

const RightArrow = styled.img`padding-left: 8px;`;

export default () => <RightArrow src={rightArrow} alt="right arrow" />;
