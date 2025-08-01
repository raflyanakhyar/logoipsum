"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Register() {
  // const form = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white sm:bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-[400px]">
        <div className="bg-white sm:rounded-[12px] sm:border border-gray-200 px-4 py-11">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={100}
            className="mx-auto mb-6"
          />
          <form className="space-y-4">
            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Input username"
                className="h-11 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 pr-12"
              />
            </div>
            <div className="space-y-1">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Input password"
                  className="h-11 border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-10 px-5 py-2 hover:bg-transparent text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger className="w-full py-5 rounded-md">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full h-11 py-1 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Register
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors underline"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
