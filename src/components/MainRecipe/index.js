import React from "react";
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
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShareIcon from "@material-ui/icons/Share";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import YouTubeIcon from "@material-ui/icons/YouTube";
import categories from "./../../utils/categories";
import { ButtonRight, Icons } from "./styles";
import { useHistory } from "react-router-dom";

function MainRecipe({ loading, recipe }) {
  const category = categories.find(({ strCategory }) => strCategory === recipe.strCategory);
  let history = useHistory();

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

  const steps = () => {
    let count = 0;
    let i = 1;
    for (i; i < 20; i++) {
      if (recipe[`strMeasure${i}`].length !== 0) {
        count++;
      }
    }
    return count;
  }

  const details = () => {
    history.push("/recipes");
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
              style={{ height: "300px" }}
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
                  avatar={<ReceiptIcon />}
                  label={`${steps()} steps`}
                />
                <Chip
                  avatar={<YouTubeIcon />}
                  label="Video"
                />
              </Icons>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ButtonRight 
              variant="contained"
              color="primary"
              startIcon={<InfoIcon />}
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
