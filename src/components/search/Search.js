import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFetch, GET_SEARCH_SONG } from "../../store/action";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  List,
  Avatar,
  CardContent,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    display: "flex",
    overflow: "visible",
    maxWidth: 250,
    maxHeight: 220,
    marginTop: "7%",
  },
  wrap: {
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: 125,
  },
}));

const Search = ({ search, getFetch, song }) => {
  const classes = useStyles();
  useEffect(() => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=a5297112b152bc2e75ee90f207e25d7b&format=json`;
    getFetch(url, GET_SEARCH_SONG);
  }, []);

  const cardWrap = song.map((item) => {
    return (
      <Card className={classes.root} key={Math.random()}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="span">
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Edit />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Artist name" secondary={item.artist} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AudiotrackIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="song" secondary={item.name} />
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      <div className={classes.title}>
        <h2>Your search</h2>
      </div>
      <div className={classes.wrap}>{cardWrap}</div>
    </>
  );
};

const mapDispatch = {
  getFetch: getFetch,
};

const mapState = (state) => {
  return {
    search: state.searchValue.search,
    song: state.songReducer.song,
  };
};
export default connect(mapState, mapDispatch)(Search);
