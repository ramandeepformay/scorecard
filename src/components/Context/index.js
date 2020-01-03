import React from "react";
const ScoreboardContext = React.createContext();
console.log(ScoreboardContext);

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;