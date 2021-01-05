import commonConstants from "./constants.json";

class NavFunctions {
  // logout function let user logout
  // and pushses to the home directory.
  logout(authService, history) {
    authService.signOut();
    history.push(commonConstants.HOME_PATH);
  }
}

export default new NavFunctions();
