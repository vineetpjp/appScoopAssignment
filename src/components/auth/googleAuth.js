import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "actions";

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn();
    } else {
      signOut();
    }
  };
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API,
          scope: "email",
        })
        .then(() => {
          var auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };
  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div>
      {isSignedIn === true ? (
        <Button variant="contained" color="secondary" onClick={onSignOutClick}>
          Sign Out
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={onSignInClick}>
          SignIn with Google
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { ...actions })(GoogleAuth);
