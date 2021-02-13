// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.mjs";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.mjs";

function displayRecipe(recipe) {
  return React.createElement("div", undefined, React.createElement("h2", undefined, recipe.title), React.createElement("div", undefined, React.createElement("h3", undefined, "Ingredients"), React.createElement("div", undefined, recipe.ingredients)), React.createElement("div", undefined, React.createElement("h3", undefined, "Instructions"), React.createElement("div", undefined, recipe.instructions)), React.createElement("div", undefined, React.createElement("h3", undefined, "Tags"), React.createElement("div", undefined, Belt_Array.map(recipe.tags, (function (tag) {
                            return React.createElement("div", undefined, tag);
                          })))));
}

function ViewRecipe(Props) {
  var state = Props.state;
  var title = Props.title;
  var recipe = Belt_MapString.get(state.recipes, title);
  if (recipe !== undefined) {
    return displayRecipe(recipe);
  } else {
    return React.createElement("div", undefined, title + " is not in our database");
  }
}

var make = ViewRecipe;

export {
  displayRecipe ,
  make ,
  
}
/* react Not a pure module */
