import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import YouTubeIcon from "@material-ui/icons/YouTube";
import categories from "./../../utils/categories";
import { generateSlug } from "./../../utils/helpers";
import { ButtonRight, Icons } from "./styles";
import { favoritesAddRecipe, favoritesRemoveRecipe } from "./../../store/actions/favorites";
import FavoritesContext from "./../../store/context/favorites";
import { useHistory } from "react-router-dom";

function MainRecipe({ loading, recipe }) {
  const [favorite, setFavorite] = useState(false);
  const category = categories.find(({ strCategory }) => strCategory === recipe.strCategory);
  let history = useHistory();
  const { favorites, dispatch } = useContext(FavoritesContext);

  const qtdIngredients = () => {
    let count = 0;
    let i = 1;
    for (i; i < 20; i++) {
      if (recipe[`strIngredient${i}`].length !== 0) {
        count++;
      }
    }
    return count;
  }

  const details = () => {
    const slug = generateSlug(recipe.strMeal);
    history.push(`/recipe/${slug}`, recipe);
  }

  function handleFavorite() {
    const result = favorites.find(({ idMeal }) => recipe.idMeal === idMeal);
    if(result) {
      setFavorite(false);
      favoritesRemoveRecipe(recipe.idMeal, dispatch);
      return;
    }
    setFavorite(true);
    favoritesAddRecipe(recipe, dispatch);
  }

  return (
    <Card>
      { loading ? (
        <CardActionArea>
          <Skeleton animation="wave" variant="rect" style={{ height: "300px" }} />
          <CardContent>
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          </CardContent>
        </CardActionArea>
      ) : (
        <React.Fragment>
          <CardActionArea onClick={() => details()}>
            <CardMedia
              image={recipe.strMealThumb}
              title={recipe.strMeal}
              style={{ height: "360px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.strMeal}
              </Typography>
              <Icons>
                <Chip
                  avatar={<Avatar alt={category.strCategory} src={category.strCategoryThumb} />}
                  label={category.strCategory}
                />
                <Chip
                  avatar={<LocalCafeIcon />}
                  label={`${qtdIngredients()} ingredients`}
                />
                <Chip
                  avatar={<YouTubeIcon />}
                  label="Video"
                />
              </Icons>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={() => handleFavorite()}>
              <FavoriteIcon color={favorite ? "secondary" : "action"} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ButtonRight
              startIcon={<InfoIcon color="action" />}
              onClick={() => details()}
            >
              Full recipe
            </ButtonRight>
          </CardActions>
        </React.Fragment>
        )
      }
    </Card>
  );
};

export default MainRecipe;
