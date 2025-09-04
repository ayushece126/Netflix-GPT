// Base where your static files are served from
export const BASE_URL = (
  process.env.REACT_APP_BASE_URL ||
  process.env.PUBLIC_URL ||
  ""
).replace(/\/$/, ""); // strip trailing slash

const asset = (p) => `${BASE_URL}/${String(p).replace(/^\//, "")}`;

export const LOGO_ICON = asset("netflix-gpt.png");
export const LOGO_RED = asset("ngpt-red-300x71-01.png");
export const LOGO_WHITE = asset("ngpt-white-300x71.png");
export const POSTER_BG = asset("poster-bg.jpeg");
export const NO_POSTER = asset("no_movie_poster.png");
export const BACKDROP = asset("blur.png");
export const AVATAR_RED = asset("avatar-red.jpeg");
export const AVATAR_BLUE = asset("avatar-blue.jpeg");

export const SCREENSHOT = {
  landing: asset("screenshot/01-Landing.png"),
  signin: asset("screenshot/02-Signin.png"),
  signup: asset("screenshot/03-Signup.png"),
  browse: asset("screenshot/04-Browse.png"),
  movieList: asset("screenshot/05-Movie-List.png"),
  shimmer: asset("screenshot/06-Shimmer-loading.png"),
  search: asset("screenshot/07-Search.png"),
  watch: asset("screenshot/08-Watch.png"),
};
