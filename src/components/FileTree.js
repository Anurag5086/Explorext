import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import CollapseIcon from "./CollapseIcon";
import ExpandIcon from "./ExpandIcon";
import { getFoldersAction } from "../actions/Document";

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export default function FileTree() {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    getFoldersAction().then((res) => setFolderList(res));
  }, []);
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={["1"]}
      defaultCollapseIcon={<CollapseIcon />}
      defaultExpandIcon={<ExpandIcon />}
      sx={{
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
        marginLeft: "20px",
      }}
    >
      {folderList.map((folder, key) => (
        <StyledTreeItem nodeId={key} label={folder.name}>
          <StyledTreeItem nodeId="6" label="Hello" />
        </StyledTreeItem>
      ))}
      {/* <StyledTreeItem nodeId="1" label="Main">
        <StyledTreeItem nodeId="2" label="Hello" />
        <StyledTreeItem nodeId="3" label="Subtree with children">
          <StyledTreeItem nodeId="6" label="Hello" />
          <StyledTreeItem nodeId="7" label="Sub-subtree with children">
            <StyledTreeItem nodeId="9" label="Child 1" />
            <StyledTreeItem nodeId="10" label="Child 2" />
            <StyledTreeItem nodeId="11" label="Child 3" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="8" label="Hello" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label="World" />
        <StyledTreeItem nodeId="5" label="Something something" />
      </StyledTreeItem>
      <StyledTreeItem nodeId="12" label="Main2">
        <StyledTreeItem nodeId="8" label="Hello" />
      </StyledTreeItem> */}
    </TreeView>
  );
}
