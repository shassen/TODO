"use client"

import { cn } from "@/lib/utils"
import {
  HomeIcon,
  SquaresPlusIcon,
  FolderIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import {
  HomeIcon as HomeIconSolid,
  SquaresPlusIcon as CheckSquareIconSolid,
  FolderIcon as FolderIconSolid,
  UsersIcon as UsersIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from "@heroicons/react/24/solid"

interface Tab {
  id: string
  label: string
  count?: number
}

interface BottomNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

const getTabIcon = (tabId: string, isActive: boolean) => {
  const iconClass = "w-6 h-6"

  switch (tabId) {
    case "dashboard":
      return isActive ? <HomeIconSolid className={iconClass} /> : <HomeIcon className={iconClass} />
    case "todos":
      return isActive ? (
        <CheckSquareIconSolid className={iconClass} />
      ) : (
        <SquaresPlusIcon className={iconClass} />
      )
    case "collections":
      return isActive ? (
        <FolderIconSolid className={iconClass} />
      ) : (
        <FolderIcon className={iconClass} />
      )
    case "friends":
      return isActive ? (
        <UsersIconSolid className={iconClass} />
      ) : (
        <UsersIcon className={iconClass} />
      )
    case "profile":
      return isActive ? (
        <UserCircleIconSolid className={iconClass} />
      ) : (
        <UserCircleIcon className={iconClass} />
      )
    default:
      return <HomeIcon className={iconClass} />
  }
}

export const BottomNavigation = ({ tabs, activeTab, onTabChange }: BottomNavigationProps) => {
  const tabCount = tabs.length

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div
        className={cn(
          "h-16",
          tabCount === 3 && "grid grid-cols-3",
          tabCount === 4 && "grid grid-cols-4",
          tabCount === 5 && "grid grid-cols-5",
        )}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 transition-colors relative",
                isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700",
              )}
            >
              <div className="relative">
                {getTabIcon(tab.id, isActive)}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[20px] text-[10px] font-medium">
                    {tab.count > 99 ? "99+" : tab.count}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
