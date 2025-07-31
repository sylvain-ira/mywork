

import { Moon, Sun, Settings, Bell, User } from "lucide-react"
import { useLoginUser, useTheme } from "../hooks/useContexts"

const Header = () => {
  const { loginUser } = useLoginUser()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className=" fixed w-full  bg-background  px-4 md:px-70 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        {/* Title & Welcome */}
        <div className="flex-1 min-w-0 ml-0 ">
          <h1 className="text-xl md:text-2xl font-bold text-foreground truncate">
            Dashboard
          </h1>
          <p className="text-sm md:text-base text-muted-foreground truncate">
            Welcome Back, {loginUser?.username}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-0 md:space-x-4 flex-shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {/* Settings */}
          <button
            className="hidden sm:block p-2 rounded-lg hover:bg-muted transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Notifications */}
          <button
            className="p-2 rounded-lg hover:bg-muted transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
          </button>

          {/* Desktop User Profile */}
          <div className="hidden sm:flex items-center space-x-3 pl-2 border-l border-border">
            <span className="text-sm text-muted-foreground truncate max-w-32">{loginUser?.email}</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          {/* Mobile Avatar */}
          <div className="sm:hidden w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
