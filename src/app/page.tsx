'use client';

import Image from 'next/image';
import UseCases from './use-cases';
import Navbar from './components/Navbar';

export default function Home() {
  // const sponsors = Array(10).fill('/base.png'); // Temporary array of sponsor logos
  {/* hero section */ }

  const partners = [
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    },
    {
      name: 'Access',
      logo: '/partner1.png'
    }
  ]
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* hero section */}
      <div className="bg-transparent h-[30rem] relative">
        <Image src="/farmland-1.jpg" alt="Yield Logo" className=" w-full h-full object-cover absolute top-0 left-0 z-0 brightness-70"
          width={"20000"}
          height={"20000"} />
        <div className='z-10 absolute top-0 left-0 w-full h-full'>
          <Navbar />
        </div>
      </div>
      <div className='w-full h-fit bg-black flex justify-center items-center p-4'>
        <div className="gap-10 items-end justify-center flex w-full overflow-x-scroll">
          {/* Partner 1 */}
          {partners.map((partner, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="relative">
                <Image src={partner.logo} alt={partner.name} width={40} height={40} className="" />
                {/* <span className="absolute -left-4 -top-2 text-green-400 text-xl">🌱</span> */}
              </div>
              <span className="text-white mt-1 text-sm">{partner.name}</span>
            </div>
          ))}

        </div>
      </div>
      <UseCases />
      <main className="container mx-auto p-4 md:p-8 bg-[#0B4619] flex-grow rounded-2xl m-20">

        <div className="text-white text-2xl font-bold text-center p-10">s</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 xl:m-[10rem] ">
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
          <div className="aspect-[3/2] border-1 md:aspect-auto rounded-2xl overflow-hidden">
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
          <button className="text-white text-2xl font-bold text-center bg-[#9DC45F] p-4 rounded-2xl m-10" onClick={() => window.open('https://prototype.yieldit.co/app?search=1&lat=51.57127875&lon=-0.0549025')}>Launch Prototype</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#181A1B] text-white border-t border-[#9DC45F]/20 mt-10 max-lg:px-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
            {/* Logo and Brand Message */}
            <div className="md:w-1/3 flex flex-col items-start mb-8 md:mb-0">
              <div className="w-20 h-20 relative mb-4">
                <Image src="/yieldlogo.jpg" alt="Yield Logo" fill className="object-contain rounded-full" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Yield</h2>
              <p className="text-gray-300 mb-4 max-w-xs">Empowering sustainable growth and prosperity for farmers through innovative, decentralized agricultural solutions.</p>
              <div className="flex space-x-4 mt-2">
                {/* Social Icons */}
                <a href="#" className="hover:text-[#9DC45F] transition" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="hover:text-[#9DC45F] transition" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="hover:text-[#9DC45F] transition" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.88 0 12 0 12s0 4.12.502 5.814a2.994 2.994 0 002.112 2.112C4.308 20.5 12 20.5 12 20.5s7.692 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.12 24 12 24 12s0-4.12-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Onboard as a Farmer</h3>
              <p className="text-gray-300 mb-4 text-center md:text-left">Join Yield to access new markets, tools, and a supportive community. Sign up for updates and early access!</p>
              <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
                <input type="email" placeholder="Enter your email" className="rounded-full px-4 py-2 text-black focus:outline-none w-full" />
                <button type="submit" className="bg-[#9DC45F] text-black font-bold px-6 py-2 xl:rounded-full rounded-2xl hover:bg-[#7fa94a] transition">Join Now</button>
              </form>
            </div>

            {/* Link Columns */}
            <div className="md:w-1/3 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Transparency</h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li><a href="#" className="hover:text-[#9DC45F]">Open Source</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Audits & Standards</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Sustainability</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Carbon Offsets</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Community</h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li><a href="#" className="hover:text-[#9DC45F]">Events</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Meetups</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Telegram</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Discord</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Support</h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li><a href="#" className="hover:text-[#9DC45F]">FAQ</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Help Center</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">About</h4>
                <ul className="text-gray-400 space-y-1 text-sm">
                  <li><a href="#" className="hover:text-[#9DC45F]">Team</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Partners</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Careers</a></li>
                  <li><a href="#" className="hover:text-[#9DC45F]">Roadmap</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright and Cookie Notice */}
          <div className="mt-12 pt-8 border-t border-[#9DC45F]/20 text-center text-gray-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Yield. All rights reserved.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2">
              <span>We use cookies to deliver the best experience. <a href="#" className="underline hover:text-[#9DC45F]">Privacy Policy</a></span>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button className="bg-[#9DC45F] text-black px-3 py-1 rounded-full text-xs font-bold hover:bg-[#7fa94a] transition">Accept All</button>
                <button className="border border-[#9DC45F] text-[#9DC45F] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#7fa94a] hover:text-black transition">Necessary Only</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
