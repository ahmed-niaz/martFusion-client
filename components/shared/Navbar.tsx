"use client";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, Search, Menu, X, LogOut } from "lucide-react";
import logo from "@/public/assets/MartFusion.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-orange-100 shadow-md">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop & Mobile Navbar */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden rounded-full p-0 size-10 hover:bg-orange-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image src={logo} alt="martFusion" width={64} height={64} />
          </Link>

          {/* Search Bar - Hidden on small mobile, visible on md+ */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full py-2.5 pl-12 pr-4 outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-3">
            {/* Wishlist Button */}
            <Button
              variant="ghost"
              className="rounded-full p-0 size-10 hover:bg-orange-50 hover:text-orange-500 transition-colors relative"
              title="Wishlist"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                3
              </span>
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              className="rounded-full p-0 size-10 hover:bg-orange-50 hover:text-orange-500 transition-colors relative"
              title="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                5
              </span>
            </Button>

            {/* Login Button */}
            <Link href="/login">
              <Button
                className="rounded-full px-6 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors font-semibold"
                variant="outline"
              >
                Login
              </Button>
            </Link>

            {/* Create Shop Button */}
            <Link href="/create-shop">
              <Button className="rounded-full px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                Create Shop
              </Button>
            </Link>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-10 w-10 border-2 border-orange-200 hover:border-orange-500 transition-colors cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2 border-orange-100 shadow-lg">
                <DropdownMenuLabel className="text-orange-600 font-semibold">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-orange-100" />
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/my-shop" className="w-full">
                    My Shop
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-orange-100" />
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50 text-red-600 font-semibold">
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Wishlist */}
            <Button
              variant="ghost"
              className="rounded-full p-0 size-9 hover:bg-orange-50 hover:text-orange-500 transition-colors relative"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold text-[10px]">
                3
              </span>
            </Button>

            {/* Mobile Cart */}
            <Button
              variant="ghost"
              className="rounded-full p-0 size-9 hover:bg-orange-50 hover:text-orange-500 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold text-[10px]">
                5
              </span>
            </Button>

            {/* Mobile Avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-9 w-9 border-2 border-orange-200 hover:border-orange-500 transition-colors cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold text-xs">
                    JD
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2 border-orange-100 shadow-lg">
                <DropdownMenuLabel className="text-orange-600 font-semibold">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-orange-100" />
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50">
                  <Link href="/my-shop" className="w-full">
                    My Shop
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-orange-100" />
                <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 focus:bg-orange-50 text-red-600 font-semibold">
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search Bar - Below main nav */}
        <div className="md:hidden mt-3">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-full py-2.5 pl-12 pr-4 outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-orange-100 pt-4 animate-in slide-in-from-top">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors font-semibold mb-2"
                variant="outline"
              >
                Login
              </Button>
            </Link>
            <Link href="/create-shop" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-md">
                Create Shop
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
