const toJs = (input: string) => {
    return input.split("\r");
  };
  
  const splitData = (input: string) => {
    return input.split(",");
  };
  
  const removeNewLine = (input: string) => {
    return input.split("\n").join("");
  };

  export{}