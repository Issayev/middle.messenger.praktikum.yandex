import { EnumAppPages } from "pages";

export const enum EnumAppRoutes {
  NavigationPage = "navigation_page_route",
  SignUp = "signup_route",
  Login = "login_route",
  Chats = "chats_route",
  Profile = "profile_route",
  NotFound = "not_found_route",
  NotAuthorized = "not_authorized_route",
}

export const AppRoutesData = {
  [EnumAppRoutes.NavigationPage]: {
    path: "/naviagtion",
    block: EnumAppPages.Navigation,
    needAuthorization: false,
  },
  [EnumAppRoutes.SignUp]: {
    path: "/signup",
    block: EnumAppPages.SignUp,
    needAuthorization: false,
  },
  [EnumAppRoutes.Login]: {
    path: "/login",
    block: EnumAppPages.Login,
    needAuthorization: false,
  },
  [EnumAppRoutes.Chats]: {
    path: "/chats",
    block: EnumAppPages.Chats,
    needAuthorization: true,
  },
  [EnumAppRoutes.Profile]: {
    path: "/profile",
    block: EnumAppPages.Profile,
    needAuthorization: true,
  },
  [EnumAppRoutes.NotFound]: {
    block: EnumAppPages.NotFound,
    needAuthorization: false,
  },
  [EnumAppRoutes.NotAuthorized]: {
    block: EnumAppPages.Forbidden,
    needAuthorization: false,
  },
};

export const MapPathToRoute: Record<string, EnumAppRoutes> = {
  "/naviagtion": EnumAppRoutes.NavigationPage,
  "/signup": EnumAppRoutes.SignUp,
  "/login": EnumAppRoutes.Login,
  "/chats": EnumAppRoutes.Chats,
  "/profile": EnumAppRoutes.Profile,
};
