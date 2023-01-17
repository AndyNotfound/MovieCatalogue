import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Likes from "../views/pages/likes";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/upcoming": Upcoming,
  "/detail/:id": Detail,
  "/likes": Likes,
};

export default routes;
