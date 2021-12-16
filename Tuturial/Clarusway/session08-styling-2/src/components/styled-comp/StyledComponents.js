import React from "react";
import { Button } from "./button/Button.styles";
import ExtendedComp from "./extended-link/ExtendedComp";
import HeaderText from "./header/HeaderText";
import Link from "./link/Link";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper bgColor="wheat">
      <Button primary>Primary</Button> {/* send as props to Button */}
      <Button>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
