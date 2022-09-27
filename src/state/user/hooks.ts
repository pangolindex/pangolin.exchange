import { useCallback } from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "../index";
import { updateUserDarkMode } from "./actions";

export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useSelector<{ userDarkMode: boolean | null; matchesDarkMode: boolean }>(
    ({ user: { matchesDarkMode, userDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode
    }),
    shallowEqual
  )

  if (userDarkMode === null && !matchesDarkMode) {
    // by default we want to show dark mode
    return true
  }

  return userDarkMode === null ? matchesDarkMode : userDarkMode
}


export function useDarkModeManager(): [boolean, () => void] {
  const dispatch = useDispatch()
  const darkMode = useIsDarkMode()

  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !darkMode }))
  }, [darkMode, dispatch])

  return [darkMode, toggleSetDarkMode]
}
