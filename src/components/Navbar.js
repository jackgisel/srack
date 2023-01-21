import React from "react";
import Link from "next/link";
import { useAuth } from "util/auth";

function Navbar(props) {
  const auth = useAuth();

  return (
    <header className="py-5 px-4 bg-blue-200 border-b-2 border-black">
      <div className="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
        <Link href="/">
          <a className="mb-3 md:mb-0 text-2xl font-extrabold">Salesrack</a>
        </Link>
        <nav className="flex flex-wrap items-center md:ml-auto">
          <Link href="/about">
            <a className="ml-5 font-bold">About</a>
          </Link>

          {(!auth.user || !auth.user.stripeSubscriptionId) && (
            <Link href="/pricing">
              <a className="ml-5 font-bold">Pricing</a>
            </Link>
          )}

          {auth.user && (
            <>
              <Link href="/dashboard">
                <a className="ml-5 font-bold">Dashboard</a>
              </Link>
              <Link href="/settings/general">
                <a className="ml-5 font-bold">Settings</a>
              </Link>
              <Link href="/auth/signout">
                <a
                  className="ml-5 font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    auth.signout();
                  }}
                >
                  Sign out
                </a>
              </Link>
            </>
          )}

          {!auth.user && (
            <Link href="/auth/signin">
              <a className="ml-5 font-bold">Sign in</a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
