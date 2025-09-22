"use client"

import { TabNavigation } from "./TabNavigation"
import { BottomNavigation } from "./BottomNavigation"

interface Tab {
  id: string
  label: string
  count?: number
}

interface ResponsiveNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export const ResponsiveNavigation = ({
  tabs,
  activeTab,
  onTabChange,
}: ResponsiveNavigationProps) => {
  return (
    <>
      {/* Desktop Tab Navigation */}
      <div className="hidden md:block">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </>
  )
}
