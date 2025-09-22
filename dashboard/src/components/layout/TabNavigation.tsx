"use client"

import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  count?: number
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-full flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative inline-flex items-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-200",
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900",
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={cn(
                  "ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium transition-colors",
                  activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600",
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
