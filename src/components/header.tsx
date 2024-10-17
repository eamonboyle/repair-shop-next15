import Link from "next/link"
import { HomeIcon, FileIcon, UsersRound } from "lucide-react"

import { NavButton } from "@/components/nav-button"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-50">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/" icon={HomeIcon} label="Home" />

          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton icon={FileIcon} label="Tickets" href="/tickets" />
          <NavButton icon={UsersRound} label="Customers" href="/customers" />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
