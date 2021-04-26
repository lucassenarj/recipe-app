import React from "react";
import { Link } from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

function ItemList({ icon, path, title }) {
  return (
    <Link to={path}>
      <ListItem button>
        <ListItemIcon>
          <Icon>{ icon }</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
};

export default ItemList;
