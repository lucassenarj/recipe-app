import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { ItemList } from "./../";
import { menuItems } from "./../../utils/constants";
import { Container, Icon } from "./styles";
import { ReactComponent as RecipeIcon } from "./../../assets/icons/recipe.svg";

function NavItems() {
  return (
    <Container>
      <Icon>
        <RecipeIcon style={{ width: "256px", height: "256px", color: "rgba(0, 0, 0, 0.54)" }} />
      </Icon>
      <Divider />
      <List>
        {
          menuItems.map(({ icon, path, title }) => <ItemList key={title} icon={icon} path={path} title={title} />)
        }
      </List>
    </Container>
  );
};

export default NavItems;
