"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Hydration एरर से बचने के लिए माउंट होने का इंतज़ार करें
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}