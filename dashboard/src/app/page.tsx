"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { LoginForm } from "@/components/auth/LoginForm"
import { RegisterForm } from "@/components/auth/RegisterForm"
import { Button } from "@/components/ui/Button"

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true)
  const { token } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (token) {
      router.push("/dashboard")
    }
  }, [token, router])

  if (token) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your todo app</h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            We all need a little help staying organized. Keep mind clear and your todo list
            organized.
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-8 sm:py-8">
          <div className="flex space-x-2 sm:space-x-4 mb-6">
            <Button
              variant={isLogin ? "default" : "outline"}
              className="flex-1 text-sm sm:text-base"
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </Button>
            <Button
              variant={!isLogin ? "default" : "outline"}
              className="flex-1 text-sm sm:text-base"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </Button>
          </div>

          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  )
}
