import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FavoritesContext from "./../../store/context/favorites";
import { RecipeItem } from "./../";
import { NoResult } from "./styles";

function RecipeList(){
  const { favorites } = useContext(FavoritesContext);
  return (
    <>
    { favorites.length === 0 ? (
        <NoResult>
          <Typography variant="h6" paragraph component="p">
            No items to show
          </Typography>  
        </NoResult>
      ) : (
        <Grid container spacing={6}>
          { favorites.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
              <RecipeItem recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      )
    }
    </>
  );
};

export default RecipeList;
