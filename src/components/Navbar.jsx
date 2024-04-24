// Navigation Bar
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(false);
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex w-full mb-16 pt-3 justify-between px-4 items-center">
      <Link href="/" className="flex gap-2 flex-center">
        <h1>Promptology</h1>
      </Link>
      {/* Logged In */}
      {isUserLoggedIn && (
        <div className="gap-2 items-center sm:flex hidden">
          <button className="border px-4 py-2 rounded-full border-black bg-black text-white">
            Create Prompt
          </button>
          <button className="border px-4 py-2 rounded-full border-black">
            Sign Out
          </button>
          <Link href="/profile">
            <div className="p-5 bg-black rounded-full"></div>
          </Link>
        </div>
      )}

      {/* mobile */}
      <div className="flex relative sm:hidden">
        {isUserLoggedIn ? (
          <div className="flex">
            <div
              className="w-[45px] h-[45px] bg-black rounded-full"
              onClick={() => {
                setDrop(!drop);
              }}
            ></div>
            {drop && (
              <div className="dropdown">
                <Link href="/profile" onClick={() => setDrop(false)}>
                  <h1 className="hover:opacity-50">My Profile</h1>
                </Link>
                <Link href="/prompts" onClick={() => setDrop(false)}>
                  <h1 className="hover:opacity-50">Create Prompts</h1>
                </Link>
                <button className="hover:opacity-50">Signout</button>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};