"use client";

import { SessionProvider } from "next-auth/react";

export function SessionProviderWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
git init
git add .
git commit -m "first commit"

git config --global user.email "tumhari_github_email@gmail.com"
git config --global user.name "Tumhara Naam"

