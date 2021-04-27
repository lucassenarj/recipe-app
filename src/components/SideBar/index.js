import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Recipe, Recipes } from "./styles";
import categories from "./../../utils/categories";

function SideBar() {
  return (
    <React.Fragment>
      <Typography variant="h3">
        Recipes
      </Typography>
      <Recipes>
        {
          categories.map((category) => (
            <Recipe
              avatar={<Avatar alt={category.strCategory} src={category.strCategoryThumb} />}
              label={category.strCategory}
              onClick={() => console.log(category)}
              key={category.idCategory}
            />
          ))
        }
      </Recipes>
    </React.Fragment>
  );
};

export default SideBar;
