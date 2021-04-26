import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { SideBar } from "./../";

function Drawer({ display, handle }) {
  return (
    <SwipeableDrawer
      open={display}
      onClose={handle}
      onOpen={handle}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={handle}
        onKeyDown={handle}
      >
        <SideBar />
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
