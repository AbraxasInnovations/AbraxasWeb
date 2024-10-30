'use client';
import React from 'react';
import { ChevronDown, ArrowRight, Globe, Cpu, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Abraxas Innovations</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovating the Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Pushing boundaries. Breaking limits. Creating tomorrow.
          </p>
          <a href="#about" className="inline-flex items-center">
            <ChevronDown className="animate-bounce w-12 h-12" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Abraxas Innovations, we're dedicated to pushing the boundaries of what's possible. 
                Our team of experts works tirelessly to develop cutting-edge solutions that transform 
                industries and improve lives.
              </p>
              <button className="mt-8 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <span>Learn more about our mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be at the forefront of technological advancement, creating solutions 
                  that define the future of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-400" />,
                title: "Global Solutions",
                description: "Delivering innovative solutions across borders and industries."
              },
              {
                icon: <Cpu className="w-12 h-12 text-purple-400" />,
                title: "Advanced Technology",
                description: "Leveraging cutting-edge technology to solve complex problems."
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-green-400" />,
                title: "Creative Innovation",
                description: "Thinking outside the box to create revolutionary solutions."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 transition-colors">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Abraxas Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}