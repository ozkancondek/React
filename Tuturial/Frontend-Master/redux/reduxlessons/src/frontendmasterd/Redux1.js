import React from "react";

import { compose } from "redux";

export const Redux1 = () => {
  //compose()

  const upperer = (string) => string.toUpperCase();
  const bolder = (string) => string.bold();
  const repeater = (string) => string.repeat(3);
  //if I want to use all these three functions together

  const combinedFunctionsOutput = (string) => repeater(bolder(upperer(string)));
  console.log(combinedFunctionsOutput("hello"));

  //compose method

  const withCompose = compose(upperer, bolder, repeater);

  console.log(withCompose("hello"));

  return <div></div>;
};
