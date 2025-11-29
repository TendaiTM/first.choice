'use client'

import React, { useState } from 'react';
import { Settings, Fuel, Gauge, Search, Filter, ChevronDown } from 'lucide-react';
import Image from 'next/image';
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
  price?: string;
  year?: number;
}

type CategoryFilter = 'all' | 'sedan' | 'hatchback' | 'truck' | 'suv';
type SortOption = 'name' | 'year' | 'price';

export default function AllCarsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [showFilters, setShowFilters] = useState(false);

  const allCars: Car[] = [
    {
      id: 1,
      name: 'Toyota Hilux 2.8GD6',
      image: '/Toyota.jpg',
      description: 'Diesel engine, full leather interior, pre-loved vehicle, good condition',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      mileage: 'Low Mileage',
      category: 'truck',
      price: '$50,000',
      year: 2022
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
      price: '$10,000',
      year: 2021
    },
    {
      id: 3,
      name: 'Jeep Cherokee',
      image: '/Jeep.jpg',
      description: 'Automatic transmission, very good fuel saver. Recent import with very low mileage',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: 'Low Mileage',
      category: 'suv',
      price: '$40,000',
      year: 2020
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
      price: '$32,000',
      year: 2019
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
      price: '$45,000',
      year: 2023
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
      price: '$7,500',
      year: 2021
    },
    {
      id: 7,
      name: 'BMW X5',
      image: '/BMW-preview.png',
      description: 'Luxury SUV with premium features, navigation, and advanced safety systems',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      mileage: 'Low Mileage',
      category: 'sedan',
      price: '$55,000',
      year: 2022
    },
    {
      id: 9,
      name: 'Ford Ranger',
      image: '/fordRanger.jpg', // You might want to add a Ford Ranger image
      description: 'Robust pickup truck, perfect for both work and adventure',
      transmission: 'Manual',
      fuelType: 'Diesel',
      mileage: 'Medium Mileage',
      category: 'truck',
      price: '$30,000',
      year: 2020
    }
  ];

  // Filter and sort cars
  const filteredAndSortedCars = allCars
    .filter(car => {
      const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'year':
          return (b.year || 0) - (a.year || 0);
        case 'price':
          // Remove $ and commas for comparison
          const priceA = parseInt(a.price?.replace(/[$,]/g, '') || '0');
          const priceB = parseInt(b.price?.replace(/[$,]/g, '') || '0');
          return priceA - priceB;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Image
                  alt='Logo'
                  src='/logo.png'
                  width={40}
                  height={40}
                />
                <span className="text-lg font-bold text-gray-900 flex flex-col">
                  First Choice <span className="text-sm font-normal text-gray-600">Car Sales</span>
                </span>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Car Collection</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our wide range of quality vehicles. Find the perfect car that matches your needs and budget.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cars by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle for Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryFilter)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="sedan">Sedans</option>
                <option value="hatchback">Hatchbacks</option>
                <option value="truck">Trucks</option>
                <option value="suv">SUVs</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 space-y-4 border-t pt-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryFilter)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="sedan">Sedans</option>
                <option value="hatchback">Hatchbacks</option>
                <option value="truck">Trucks</option>
                <option value="suv">SUVs</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedCars.length} of {allCars.length} vehicles
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Cars Grid */}
        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Car Image */}
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {car.category.toUpperCase()}
                    </span>
                  </div>
                  {car.year && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {car.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {car.name}
                    </h3>
                    {car.price && (
                      <span className="text-2xl font-bold text-blue-600">
                        {car.price}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 min-h-[48px]">
                    {car.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pb-6 border-b border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span>Transmission</span>
                      </div>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-gray-500" />
                        <span>Fuel Type</span>
                      </div>
                      <span className="font-semibold">{car.fuelType}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-red-600" />
                        <span>Mileage</span>
                      </div>
                      <span className="font-semibold text-red-600">{car.mileage}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                      Contact Seller
                    </button>
                    <button className="flex-1 bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No cars found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn&apos;t find any vehicles matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setShowFilters(false);
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us directly and we&apos;ll help you find the perfect vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Contact Our Sales Team
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              alt='Logo'
              src='/logo.png'
              width={30}
              height={30}
            />
            <span className="text-white font-bold">First Choice Car Sales</span>
          </div>
          <div className="text-center text-sm">
            © 2025 First Choice Car Sales & Services. All rights reserved.
          </div>
          <Link 
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}