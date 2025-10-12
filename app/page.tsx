import React from 'react';
import { Shield, Star, Clock, Truck, FileCheck, Users, Car, Megaphone, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function FirstChoiceLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                First Choice <span className="text-sm font-normal text-gray-600">Car Sales & Services</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        style={{
          backgroundImage: "url('/car-park.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4 ">
        <div className="max-w-7xl mx-auto text-left mt-100 mb-0">
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
      <section className=" bg-gray-50">
        <div className='flex md:flex-row flex-col'>
          <div className="flex md:flex-row flex-col py-12 items-center justify-center gap-8 mx-auto">
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
              <p className="text-gray-600">Licensed and insured for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">5-Star Experience</h3>
              <p className="text-gray-600">Rated excellent by hundreds of satisfied customers</p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick clearance and documentation services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <div className='flex md:flex-row flex-col'>
            <div className='w-1/2'>
              <Image
              src='/smiley-woman.jpg'
              alt='image'
              width={900}
              height={300}
              />
            </div>
            <div className="space-y-6 px-12 w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Transport Service?</h3>
              
              {[
                { 
                  icon: Shield, 
                  title: "Fully Insured Transport", 
                  desc: "Complete insurance coverage for your peace of mind during transit"
                },
                { 
                  icon: MapPin, 
                  title: "Door-to-Door Delivery", 
                  desc: "We pick up from Musina and deliver directly to your specified location"
                },
                { 
                  icon: Users, 
                  title: "Experienced Drivers", 
                  desc: "Professional drivers with years of experience in long-distance car transport"
                }, 
                {
                  icon: Truck,
                  title: "Transport from Musina",
                  desc: " Professional car transportation services from Musina, South Africa. Safe, secure, and reliable delivery to your destination with full insurance coverage."
                },
                {
                  icon: FileCheck,
                  title: "Clearance & Documentation",
                  desc: "Complete clearance assistance including customs documentation, import permits, and all regulatory requirements. We handle the paperwork, you enjoy the drive."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* New Car Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Car className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">New Car Services</h3>
                  <p className="text-sm text-purple-600 font-semibold">Full Support</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete support for new car purchases including financing assistance, insurance setup, registration, and all administrative requirements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-600 mt-1">•</span>
                  Financing assistance
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-600 mt-1">•</span>
                  Insurance setup
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-600 mt-1">•</span>
                  Registration services
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700">
                Explore New Cars
              </button>
            </div>

            {/* Car Advertising */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Megaphone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Car Advertising & Sales</h3>
                  <p className="text-sm text-orange-600 font-semibold">Sell Fast</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Professional car advertising services to help you sell your vehicle quickly and at the best price. We handle marketing, viewings, and negotiations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  Professional photography
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  Multi-platform advertising
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  Negotiation support
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700">
                Sell My Car
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose First Choice?</h2>
              <p className="text-gray-600 mb-8">
                With years of experience in the automotive industry and specialized expertise in South African car transport and clearance, First Choice has become the trusted partner for car buyers and sellers across the region.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Knowledge</h4>
                    <p className="text-gray-600">Deep understanding of South African automotive regulations and Musina transport logistics.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Full Service Solution</h4>
                    <p className="text-gray-600">From transport to clearance to sales - we handle every aspect of your car journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Trusted Reputation</h4>
                    <p className="text-gray-600">Built on transparency, reliability, and exceptional customer service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Cars Transported</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-gray-300 mb-12">Ready to experience the First Choice difference? Contact us now.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-1">+263 783 456 789</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-1">info@firstchoicecars.co.zw</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm mb-1">CDB, Harare, Zimbabwe</p>
              <p className="text-gray-400 text-sm">First Choice Carsales</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Get Free Quote
            </button>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md text-gray-900 flex-1"
            />
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
            © 2024 First Choice Car Sales & Services. All rights reserved.<br />
            <span className="text-xs">Licensed car dealer and transport service provider</span>
          </div>
        </div>
      </footer>
    </div>
  );
}