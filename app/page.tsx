'use client'

import React from 'react';
import { DollarSign, Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle, Settings, Fuel, Gauge, Users, Car, Phone, Mail, MapPin, Menu, X  } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric';
  mileage: 'Low Mileage' | 'Medium Mileage' | 'High Mileage';
  category: 'sedan' | 'hatchback' | 'truck' | 'suv';
  price: string;
}

type CategoryFilter = 'all' | 'sedan' | 'hatchback' | 'truck' | 'suv';

export default function FirstChoiceLanding() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  {/*const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });*/}

  {/*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };*/}


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const featuredCars: Car[] = [
    {
      id: 1,
      name: 'Toyota Hilux 2.8GD6',
      image: '/Toyota.jpg',
      description: 'Diesel engine, full leather interior, pre-loved vehicle, good condition',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      mileage: 'Low Mileage',
      category: 'truck',
      price: '50000',
    },
    {
      id: 2,
      name: 'Honda Fit',
      image: '/honda.jpg',
      description: 'Automatic transmission, recent import, very neat',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: 'Low Mileage',
      category: 'hatchback',
      price: '10000'
    },
    {
      id: 3,
      name: 'Jeep Cherokee',
      image: '/Jeep.jpg',
      description: 'Automatic transmission, very good fuel saver. Recent import with very low mileage',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: 'Low Mileage',
      category: 'sedan',
      price: '40,000'
    },
    {
      id: 4,
      name: 'Nissan Navara',
      image: '/Navara.jpg',
      description: 'Powerful diesel engine, 4x4 capability, excellent for both work and leisure',
      transmission: 'Manual',
      fuelType: 'Diesel',
      mileage: 'Medium Mileage',
      category: 'truck',
      price: '32,000'
    },
    {
      id: 5,
      name: 'Toyota Fortuner',
      image: '/Fortuner.png',
      description: 'Spacious 7-seater SUV, leather seats, sunroof, perfect family vehicle',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      mileage: 'Low Mileage',
      category: 'suv',
      price: '45000'
    },
    {
      id: 6,
      name: 'Mazda Demio',
      image: '/Demio.jpeg',
      description: 'Compact and efficient, ideal city car, excellent fuel economy',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: 'Low Mileage',
      category: 'hatchback',
      price: '7500'
    }
  ];

  const filteredCars = selectedCategory === 'all' 
    ? featuredCars 
    : featuredCars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image
                alt='Logo'
                src='/logo.png'
                width={50}
                height={50}              
              />
              <span className="text-xl font-bold text-gray-900 flex flex-col">
                First Choice <span className="text-sm font-normal text-gray-600">Car Sales & Services</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#featured-cars" className="text-gray-700 hover:text-blue-600">Featured Cars</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              {/*<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>*/}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>            
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a
                  href="#featured-cars"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={closeMobileMenu}
                >
                  Featured Cars
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
                {/* ADDED: Optional Call Now button in mobile menu */}
                {/*<div className="pt-2 border-t border-gray-200">
                  <a
                    href="tel:+263783123123"
                    className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 gap-2"
                    onClick={closeMobileMenu}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>*/}
              </div>
            </div>
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Hero Section */}
      <section 
        id="home"
        style={{
          backgroundImage: "url('/car-park.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-left mt-93 mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="text-yellow-300 text-shadow-black">First Choice</span> for<br />
            Complete Car Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            From Musina transport to full clearance services, we handle everything so you can drive with confidence.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className='flex md:flex-row flex-col'>
          <div className="flex md:flex-row flex-col py-12 px-16 items-center justify-center gap-8 mx-auto">

            <div className="text-center md:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200 md:h-70">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Car className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Car dealership</h3>
              <p className="text-gray-600">We are a car dealership based in Zimbabwe. We sell a wide range of vehicles.</p>
            </div>

            <div className="text-center md:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200 md:h-70">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted by clients</h3>
              <p className="text-gray-600">We are a well renowned car dealer in Zimbabwe with lot of happy clients.</p>
            </div>

            <div className="text-center md:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200 md:h-70">
              <div className="inline-block p-4 bg-cyan-100 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <MapPin className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Based in Harare</h3>
              <p className="text-gray-600">We are based in Harare but we are open to deals from any part of the country.</p>
            </div>

            <div className="text-center md:w-1/4 bg-white rounded-lg shadow-md p-6 border border-gray-200 md:h-70">
              <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                <DollarSign className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pre-owned cars deals</h3>
              <p className="text-gray-600">So apart from selling cars, we also purchase pre-owned vehicles</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="featured-cars">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              SOME OF THE CARS WE STOCK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Featured Cars
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ALL CARS
              </button>
              <button
                onClick={() => setSelectedCategory('sedan')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'sedan'
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                SEDANS
              </button>
              <button
                onClick={() => setSelectedCategory('hatchback')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'hatchback'
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                HATCHBACKS
              </button>
              <button
                onClick={() => setSelectedCategory('truck')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'truck'
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                TRUCKS
              </button>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Car Image */}
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                    <span className="text-2xl font-bold text-blue-600">
                      {car.price}
                    </span>
                  </div>


                  <p className="text-gray-600 text-sm mb-6 min-h-[48px]">
                    {car.description}
                  </p>

                  {/* Features */}
                  <div className="flex justify-between items-center text-sm text-gray-700 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-gray-500" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="w-4 h-4 text-gray-500" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-red-600" />
                      <span className="text-red-600">{car.mileage}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  {/*<button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-md font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                    View Details
                  </button>*/}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {filteredCars.length >= 6 && (
            <div className="text-center mt-12">
              <Link href="/cars">
                <button className="px-8 py-4 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors">                
                  View All Cars
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <div className='flex md:flex-row flex-col gap-12 items-center'>
            {/* Image Section */}
            <div className='md:w-1/2 w-full'>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src='/smiley-woman.jpg'
                  alt='About Our Company'
                  width={900}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 w-full space-y-6">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">About Us</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                We are a trusted car dealership based in Zimbabwe, dedicated to providing exceptional automotive solutions to our clients. With years of experience in the industry, we have built a reputation for reliability, transparency, and customer satisfaction.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide quality vehicles and comprehensive automotive services that exceed our customers&#39; expectations, making car ownership accessible and hassle-free for everyone.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">What We Offer</h3>
                  <p className="text-gray-600">
                    From new and pre-owned vehicle sales to transport services from Musina, clearance assistance, and complete documentation support - we handle every aspect of your automotive needs with professionalism and care.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Our Commitment</h3>
                  <p className="text-gray-600">
                    Based in Harare but serving clients across Zimbabwe, we are committed to delivering exceptional service, transparent pricing, and ongoing support throughout your car ownership journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-gray-600 text-sm">Cars Sold</p>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">10+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50" id="services">
        <div className='max-w-7xl mx-auto'>
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Provide You With</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Services Layout */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            
            {/* Left Side Services */}
            <div className="md:w-1/3 space-y-16">
              {/* Transport & Clearance */}
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TRANSPORT & CLEARANCE</h3>
                <p className="text-gray-600 text-sm">
                  Professional car transportation from Musina with full insurance coverage and complete clearance assistance including customs documentation.
                </p>
              </div>

              {/* New Car Services */}
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NEW CAR SERVICES</h3>
                <p className="text-gray-600 text-sm">
                  Complete support for new car purchases including financing assistance, insurance setup, and all registration requirements.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
                <Image
                  src="/BMW-preview.png"
                  alt="Vehicle"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Right Side Services */}
            <div className="md:w-1/3 space-y-16">
              {/* Car Advertising */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CAR ADVERTISING</h3>
                <p className="text-gray-600 text-sm">
                  Professional car advertising services to help you sell your vehicle quickly at the best price with marketing and negotiation support.
                </p>
              </div>

              {/* Pre-Owned Purchases */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-gray-300 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">PRE-OWNED PURCHASES</h3>
                <p className="text-gray-600 text-sm">
                  We purchase pre-owned vehicles at competitive prices with instant valuation, quick payment, and hassle-free paperwork.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>    

      {/* CTA Section */}
      <section id="contact"  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Contact Us Column */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                      PHONE NUMBER
                    </p>
                    <a 
                      href="tel:+263783370612" 
                      className="text-white text-lg font-semibold hover:text-blue-400 transition-colors"
                    >
                      +263 783 123 123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                      EMAIL ADDRESS
                    </p>
                    <a 
                      href="mailto:info@firstchoicecars.co.zw" 
                      className="text-white text-lg font-semibold hover:text-blue-400 transition-colors"
                    >
                      click to send
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                      ADDRESS
                    </p>
                    <p className="text-white text-lg font-semibold">
                      13 Percy Flynn, Belvedere, Harare
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Info</h2>
              
              <nav className="space-y-4">
                <a 
                  href="#home" 
                  className="block text-gray-300 text-lg hover:text-white hover:translate-x-2 transition-all"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block text-gray-300 text-lg hover:text-white hover:translate-x-2 transition-all"
                >
                  About Us
                </a>
                <a 
                  href="#services" 
                  className="block text-gray-300 text-lg hover:text-white hover:translate-x-2 transition-all"
                >
                  Services
                </a>
                <a 
                  href="#featured-cars" 
                  className="block text-gray-300 text-lg hover:text-white hover:translate-x-2 transition-all"
                >
                  Gallery
                </a>
                <a 
                  href="#contact" 
                  className="block text-gray-300 text-lg hover:text-white hover:translate-x-2 transition-all"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Just a Click Column */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Just a Click</h2>
              
              <div className="space-y-6">
                {/* Inquire Now Button */}
                
                  <a href="#contact"
                  className="block w-full bg-red-600 text-white text-center py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                >
                  INQUIRE NOW
                </a>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  
                    <a href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  
                  
                    <a href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>

                  
                    <a href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Additional Social Media */}
                <div className="flex gap-4">
                  
                    <a href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>

                  
                    <a href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>

                  
                    <a href="https://wa.me/263783370612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-blue-600" />
            <span className="text-white font-bold">First Choice</span>
          </div>
          <div className="text-center text-sm">
            © 2025 First Choice Car Sales & Services. All rights reserved.<br />
            <span className="text-xs">Licensed car dealer and transport service provider</span>
          </div>
        </div>
      </footer>
    </div>
  );
}