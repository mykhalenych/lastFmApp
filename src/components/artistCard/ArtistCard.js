import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  List,
  Button,
  Avatar,
  CardContent,
  CardActions,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import {
  RemoveRedEye,
  NavigateNext,
  Edit,
} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import Tags from "../tags/Tags";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "60%",
    margin: "auto",
    marginTop: "20%",
    display: "flex",
    justifyContent: "center",
    overflow: "visible",
  },
  link: {
    textDecoration: "none",
    color: "#4791db",
    display: "flex",
    alignItems: "center",
  }
}));

const ArtistCard = ({ singleArtist }) => {
  const classes = useStyles();
  if (singleArtist.length === 0) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="span">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Edit />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Artist name"
                secondary={singleArtist.name}
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <RemoveRedEye />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Artist tags"
                secondary={<Tags tags={singleArtist.tags} />}
              />
            </ListItem>
            <CardActions disableSpacing>
              <Link className={classes.link} to="/">
                <Button
                  // onClick={onNextItem}
                  size="small"
                  color="primary"
                >
                  <NavigateNext fontSize="large" />
                  Back to chart
                </Button>
              </Link>
            </CardActions>
          </List>
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapState = (state) => {
  return {
    singleArtist: state.singleArtist.singleArtist,
  };
};
export default connect(mapState, null)(ArtistCard);
