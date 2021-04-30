import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Layout } from "./../../components";
import { Content, Text, Thumbnail } from "./styles";

function Details({ history: { location : { state: recipe }} }) {
  console.log(recipe);

  const getIngredients = () => {
    let i = 1;
    let ingredients = [];
    for (i; i < 20; i++) {
      if (recipe[`strIngredient${i}`].length !== 0) {
        ingredients.push({
          item: recipe[`strIngredient${i}`],
          measure: recipe[`strMeasure${i}`],
        });
      }
    }
    return ingredients;
  }

  const ingredients = getIngredients();

  return (
    <Layout title={recipe.strMeal}>
      <Thumbnail variant="outlined">
        <CardMedia
          image={recipe.strMealThumb}
          title={recipe.strMeal}
          style={{ height: "450px" }}
        />
      </Thumbnail>
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  { recipe.strMeal }
                </Typography>
                  {
                    recipe.strInstructions.split("\n").map((text, key) => (
                      <Text variant="body2" color="textSecondary" component="p" key={key}>
                        { text }
                      </Text>
                    ))
                  }
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card>
              <CardContent>
                <Typography component="h5" variant="h5">
                  Ingredients
                </Typography>
                <ul>
                  {
                    ingredients.map((ingredient) => (
                      <li>{ ingredient.item} - { ingredient.measure }</li>
                    ))
                  }
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Content>
    </Layout>
  );
};

export default Details;
