import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex items-center h-screen p-16 bg-white text-gray-800">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
            404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Oops! We can't seem to find the page you're looking for.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-primary text-white hover:bg-primary/90"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
