'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const sponsors = Array(10).fill('/base.png'); // Temporary array of sponsor logos

  return (
    <div className="min-h-screen flex flex-col lg:px-[12rem] bg-white">
      <main className="container mx-auto p-4 md:p-8 bg-[#0B4619] flex-grow rounded-2xl m-20">

        <div className="text-white text-2xl font-bold text-center p-10">Yield</div>
        {/* <button className="text-white text-2xl font-bold text-center">Try our new product</button> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 xl:m-[10rem]">
          {/* Billboard - Full width */}
          <div className="md:col-span-3 aspect-[3/1] border-1 border-white rounded-2xl bg-pink-200 p-[-2px]">
            <div className="relative h-full">
              <Image src="/yield.png" alt="Billboard" fill className="object-cover rounded-2xl" />
            </div>
          </div>

          {/* Three square cards in a row */}
          <div className="aspect-square border-1 border-white rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/hp.jpeg" alt="Card 1" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-xl font-bold">Happy Poke</h3>
              </div>
            </div>
          </div>

          <div className="aspect-square border-1 border-white rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/farmland.jpg" alt="Card 2" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-xl font-bold">Farm + Yield</h3>
              </div>
            </div>
          </div>
          <div className="aspect-square border-1 border-white rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/yield-car.png" alt="Card 3" fill className="object-cover" />
              {/* <div className="absolute inset-0 bg-black/10 p-6"> */}
              {/* <h3 className="text-white text-xl font-bold">Delivery</h3> */}
              {/* </div> */}
            </div>
          </div>

          {/* Wide landscape card */}
          <div className="md:col-span-2 aspect-[2/1] border-1 border-white rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/yield-bag.png" alt="Wide Card" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-2xl font-bold">Yield /s everywhere</h3>
              </div>
            </div>
          </div>

          {/* Square card */}
          <div className="aspect-square border-1 border-white rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/smilefarmers.webp" alt="Square Card" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 p-6">
                <h3 className="text-white text-xl font-bold">Real Smiles</h3>
              </div>
            </div>
          </div>

          {/* Bottom row cards */}
          <div className="aspect-[3/2] h-[25rem] border-1 md:aspect-auto rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/hp2.jpeg" alt="Card 4" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-xl font-bold">Sustainable</h3>
              </div>
            </div>
          </div>
          <div className="aspect-[3/2] border-1 md:aspect-auto rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/hp3.jpeg" alt="Card 5" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-xl font-bold">Making smiles</h3>
              </div>
            </div>
          </div>
          <div className="aspect-[3/2] border-1 md:aspect-auto rounded-2xl overflow-hidden">
            <div className="relative h-full">
              <Image src="/hp1.jpeg" alt="Card 6" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10 p-6">
                <h3 className="text-white text-xl font-bold">Trustworthy</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="text-white text-2xl font-bold text-center bg-[#9DC45F] p-4 rounded-2xl m-10" onClick={() => window.open('https://prototype.yieldit.co/')}>Launch Prototype</button>
        </div>

        {/* Sponsors Slider */}
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Our Partners & Sponsors</h2>
          <div className="relative overflow-hidden py-10">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {sponsors.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-32 rounded-lg p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo}
                      alt={`Sponsor ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#9DC45F]/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="w-32 h-32 relative mb-4">
                <Image src="/yieldlogo.jpg" alt="Yield Logo" fill className="object-contain" />
              </div>
              <p className="text-gray-700 max-w-md">
                Empowering sustainable growth through innovative agricultural solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-700 hover:text-white transition">Projects</a></li>
                <li><a href="#" className="text-gray-700 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Email: marketing@yieldit.co</li>
                <li className="text-gray-700">Phone: (123) 456-7890</li>
                <li className="text-gray-700">Address: 123 Green Street</li>
              </ul>
              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-700 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#9DC45F]/20 text-center">
            <p className="text-gray-700">&copy; {new Date().getFullYear()} Yield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
