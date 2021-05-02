import React from "react";
import { Layout, RecipeList } from "./../../components";
import { Content } from "./styles";

function Favorites(){
  return (
    <Layout title="Favorite page">
      <Content>
        <RecipeList />
      </Content>
    </Layout>
  );
};

export default Favorites;
