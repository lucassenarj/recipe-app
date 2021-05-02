import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";
import { generateSlug } from "./../../utils/helpers";
import FavoritesContext from "./../../store/context/favorites";
import { favoritesAddRecipe, favoritesRemoveRecipe } from "./../../store/actions/favorites";
import { Actions, Content, Title } from "./styles";

function Recipe({ item }) {
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  const { favorites, dispatch } = useContext(FavoritesContext);

  function details() {
    const slug = generateSlug(item.strMeal);
    history.push(`/recipe/${slug}`, item);
  }

  function handleFavorite() {
    const result = favorites.find(({ idMeal }) => item.idMeal === idMeal);
    if(result) {
      setFavorite(false);
      favoritesRemoveRecipe(item.idMeal, dispatch);
      return;
    }
    setFavorite(true);
    favoritesAddRecipe(item, dispatch);
  }

  return (
    <Content>
      <CardActionArea onClick={() => details()}>
        <CardMedia
          image={item.strMealThumb}
          title={item.strMeal}
          style={{ height: "125px" }}
        />
        <CardContent>
          <Title gutterBottom variant="subtitle1">
            { item.strMeal }
          </Title>
        </CardContent>
      </CardActionArea>
      <Actions>
        <IconButton aria-label="add to favorites" onClick={() => handleFavorite()}>
          <FavoriteIcon color={favorite ? "secondary" : "action"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          startIcon={<InfoIcon color="action" />}
          onClick={() => details()}
        >
          Full recipe
        </Button>
      </Actions>
    </Content>
  );
};

export default Recipe;
