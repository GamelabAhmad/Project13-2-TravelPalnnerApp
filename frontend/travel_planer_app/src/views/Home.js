import React, { useState } from 'react';
import Hero from '../components/Hero';
import PaketTrip from '../components/PaketTrip';
import Destinasi from '../components/Destinasi';
import InstagramSection from '../components/InstagramSection';
import Footer from '../components/Footer';


const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (term, destination) => {
    // Mock search logic
    const trips = [
      // Add the trip objects here like before
    ];

    const results = trips.filter(trip =>
      trip.title.toLowerCase().includes(term.toLowerCase()) ||
      trip.location.toLowerCase().includes(destination.toLowerCase())
    );

    setSearchResults(results);
    setIsSearching(true);
  };

  return (
    <>
      <Hero />
      <PaketTrip searchResults={isSearching ? searchResults : null} />
      <Destinasi />
      <InstagramSection />
      <Footer />
    </>
  );
};

export default Home;
