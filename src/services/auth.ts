import { authAPI } from "api/auth";
import { UserDTO } from "api/types";
import type { Dispatch } from "core/store";
import { transformUserData, APIResponseHasError } from "utils/api";

type LoginPayload = {
  login: string;
  password: string;
};

export const logout = async (dispatch: Dispatch<AppState>) => {
  dispatch({ isLoading: true });

  await authAPI.logout();

  dispatch({ isLoading: false, user: null });

  window.router.go("/login");
};

export const login = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: LoginPayload
) => {
  dispatch({ isLoading: true });

  const response = await authAPI.login(action);

  if (APIResponseHasError(response)) {
    dispatch({ isLoading: false, loginFormError: response.reason });
    return;
  }

  const responseUser = await authAPI.me();

  dispatch({ isLoading: false, loginFormError: null });

  if (APIResponseHasError(response)) {
    dispatch(logout);
    return;
  }

  dispatch({ user: transformUserData(responseUser as UserDTO) });

  window.router.go("/profile");
};
