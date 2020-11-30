import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { handleSearch } from "../../store/action";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  input: {
    background: "white",
  },
  inputWrap: {
    margin: "2%",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    marginLeft: 10,
  },
}));

const Header = ({ handleSearch, search }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.header}>
        <Typography variant="h6">
          <Link className={classes.link} to={{ pathname: "/" }}>
            Home
          </Link>
        </Typography>
        <div className={classes.inputWrap}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Search music"
            variant="outlined"
            defaultValue={search}
            onChange={handleSearch}
          />
          <Link
            to={{
              pathname: `/search/${search}`,
            }}
            className={classes.link}
          >
            <Button
              className={classes.btn}
              variant="contained"
              color="inherit"
              type="submit"
            >
              Search
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatch = {
  handleSearch: handleSearch,
};

const mapState = (state) => {
  return {
    search: state.searchValue.search,
  };
};
export default connect(mapState, mapDispatch)(Header);
