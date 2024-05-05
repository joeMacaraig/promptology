//   Navigation

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex w-full mb-16 pt-3 justify-between px-4 items-center mx-auto max-w-6xl">
      <Link href="/" className="flex gap-2 flex-center rounded-full">
        <Image src="/logo.png" width={50} height={50} alt="Promptology" className="rounded-full"/>
      </Link>
      {/* Desktop */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-4">
            <Link href="/prompts">
              <button className="border black-btn">Create Prompt</button>
            </Link>
            <button
              className="border px-4 py-2 rounded-full border-black"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile-pic"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black-btn"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile */}
      <div className="flex relative sm:hidden hover:cursor-pointer">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile-pic"
              onClick={() => {
                setDrop(!drop);
              }}
            />
            {drop && (
              <div className="dropdown">
                <Link href="/profile" onClick={() => setDrop(false)}>
                  <h1 className="hover:opacity-50">My Profile</h1>
                </Link>
                <Link href="/prompts" onClick={() => setDrop(false)}>
                  <h1 className="hover:opacity-50">Create Prompts</h1>
                </Link>
                <button
                  className="hover:opacity-50"
                  onClick={() => {
                    signOut();
                    setDrop(false);
                  }}
                >
                  Signout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black-btn"
                  key={provider.name}
                  onClick={() => {
                    signOut();
                    signIn(provider.id);
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
