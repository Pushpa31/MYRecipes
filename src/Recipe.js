import React from "react";
import "./App.css";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="title">{title}</h1>
      <ol className="ol">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className="pp"> Calories: {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
