import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  tag: {
    marginRight: 10,
  },
}));

const Tags = ({ tags }) => {
  const classes = useStyles();

  const tag = tags.tag.map((item) => (
    <span className={classes.tag} key={item.name}>{`#${item.name}`}</span>
  ));
  return <span>{tag}</span>;
};

export default Tags;
