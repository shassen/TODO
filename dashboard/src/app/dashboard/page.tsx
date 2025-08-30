import { ProtectedRoute } from "@/components/layout/ProtectedRoute"
import { Card } from "@/components/ui/Card"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Total Tasks</h3>
                <p className="text-3xl font-bold text-blue-600">0</p>
                <p className="text-sm text-gray-500">No tasks yet</p>
              </Card>

              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Completed</h3>
                <p className="text-3xl font-bold text-green-600">0</p>
                <p className="text-sm text-gray-500">Great job!</p>
              </Card>

              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pending</h3>
                <p className="text-3xl font-bold text-yellow-600">0</p>
                <p className="text-sm text-gray-500">Keep going!</p>
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">• Create your first task</p>
                  <p className="text-gray-600">• Organize tasks into collections</p>
                  <p className="text-gray-600">• Set due dates and priorities</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
