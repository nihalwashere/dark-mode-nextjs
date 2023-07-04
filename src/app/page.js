"use client";

import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <Header />

        <div className="flex-grow container mx-auto px-4 sm:px-6">
          <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">
            <h2 className="text-3xl w-[740px] text-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100 ">
              I am Nihal
            </h2>

            <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">
              I build things for the web!
            </p>
          </section>
        </div>

        <Footer />
      </main>
    </ThemeProvider>
  );
}
