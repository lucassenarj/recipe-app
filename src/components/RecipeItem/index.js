import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Info from "@material-ui/icons/Info";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import { useHistory } from "react-router-dom";
import { generateSlug } from "./../../utils/helpers";
import FavoritesContext from "./../../store/context/favorites";
import { favoritesRemoveRecipe } from "./../../store/actions/favorites";
import { Actions, Title } from "./styles";

function RecipeItem({ recipe }) {
  const history = useHistory();
  const { dispatch } = useContext(FavoritesContext);

  function details() {
    const slug = generateSlug(recipe.strMeal);
    history.push(`/recipe/${slug}`, recipe);
  }

  function handleRemove(){
    favoritesRemoveRecipe(recipe.idMeal, dispatch);
  }

  return (
    <Card>
      <CardActionArea onClick={() => details()}>
        <CardMedia
          image={recipe.strMealThumb}
          title={recipe.strMeal}
          style={{ height: "200px" }}
        />
        <CardContent>
          <Title>
            { recipe.strMeal }
          </Title>
        </CardContent>
      </CardActionArea>
      <Actions>
        <Button
          onClick={() => handleRemove()}
          aria-label="remove to favorites"
          startIcon={<RemoveCircle color="action" />}
        >
          Remove
        </Button>
        <Button
          aria-label="details"
          onClick={() => details()}
          startIcon={<Info color="action" />}
        >
          Details
        </Button>
      </Actions>
    </Card>
  );
};

export default RecipeItem;
