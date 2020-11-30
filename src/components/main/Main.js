import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import { getFetch, GET_CHART, GET_SINGLE_ARTIST } from "../../store/action";
import { EmojiPeople, NavigateNext, Edit } from "@material-ui/icons";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    display: "flex",
    overflow: "visible",
    maxWidth: 250,
    maxHeight: 330,
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
  link: {
    textDecoration: "none",
    color: "#4791db",
    display: "flex",
    alignItems: "center",
  },
}));

const Main = ({ getFetch, chartList }) => {
  const classes = useStyles();

  useEffect(() => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a5297112b152bc2e75ee90f207e25d7b&format=json`;
    getFetch(url, GET_CHART);
  }, []);

  const handleArtist = (id) => {
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${id}&api_key=a5297112b152bc2e75ee90f207e25d7b&format=json`;
    getFetch(url, GET_SINGLE_ARTIST);
  };
  const cardWrap = chartList.map((item) => {
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
                <Link
                  className={classes.link}
                  to={item.artist.name.replace(/\s/g, "")}
                >
                  <ListItemText
                    onClick={() => handleArtist(item.artist.name)}
                    primary="Artist name"
                    secondary={item.artist.name}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AudiotrackIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="song" secondary={item.name} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiPeople />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="listeners" secondary={item.listeners} />
              </ListItem>
              <CardActions disableSpacing>
                <Button size="small" color="primary">
                  <a className={classes.link} href={item.url}>
                    More information
                    <NavigateNext fontSize="large" />
                  </a>
                </Button>
              </CardActions>
            </List>
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <div>
      <div className={classes.title}>
        <h2>Top song</h2>
      </div>
      <div className={classes.wrap}>{cardWrap}</div>
    </div>
  );
};
const mapDispatch = {
  getFetch: getFetch,
};

const mapState = (state) => {
  return {
    chartList: state.chartReducer.artists,
    singleArtist: state.chart,
  };
};
export default connect(mapState, mapDispatch)(Main);
