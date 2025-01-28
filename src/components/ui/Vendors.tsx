import React, { useState } from "react";

const dogVendors = [
  "A Pup Above",
  "Acana",
  "Albrights",
  "Antlers",
  "Ark Naturals",
  "Austin & Kat",
  "Bags on Board",
  "Barkworthies",
  "Benebone",
  "Blue Ridge",
  "Bocce's",
  "Bravo!",
  "Cadet",
  "Canada Pooch",
  "Canidae",
  "Capstar",
  "Charlee Bear",
  "Chuckit",
  "Cloud Star",
  "Coastal",
  "Collachews",
  "Conair Grooming Tools",
  "Dave's Pet Food",
  "Diggin' Your Dog",
  "Doggijuana",
  "Dogginstix",
  "Dogswell",
  "Drinkwell",
  "Earth Animal",
  "Earth Rated",
  "Earthbath",
  "Earthborn",
  "Elanco",
  "Ethical",
  "Etta Says",
  "Evangers",
  "Flexi Retractable Leashes",
  "Four Paws",
  "Fromm",
  "Frontline",
  "Fruitables",
  "Go Dog",
  "Greenies (Pill Pockets)",
  "Grizzly Pet Products",
  "Happy Howie's",
  "Hare of the Dog",
  "Health Extension",
  "Hebert Honey",
  "Himalayan Dog Chew",
  "Holistic Select",
  "Homeopet",
  "Honest Kitchen",
  "Hugglehounds",
  "Instinct",
  "J.J. Fuds",
  "Jolly Pets",
  "JW Products",
  "Kin+Kind",
  "Koha",
  "Kong",
  "Kurgo",
  "Lazy Dog",
  "Loving Pets",
  "Mammoth",
  "McLovins Pet",
  "Merlin's Magic",
  "Merrick",
  "Messy Mutts",
  "Midwestern Pets (Wholesomes/Sportmix)",
  "Multipet",
  "N-Bone",
  "NaturVet",
  "Nature's Miracle",
  "Nootie",
  "Northwest Naturals",
  "Nupro",
  "Nylabone",
  "Old Mother Hubbard",
  "Oma's Pride",
  "Open Farm",
  "Orijen",
  "Outward Hound",
  "Pawz",
  "Pet Center",
  "Pet Lou",
  "Pet Mate",
  "Pet N' Shape",
  "PetSafe",
  "Petrodex",
  "Petstages",
  "Plato Pet Treats",
  "Polka Dog Bakery",
  "Preppy Puppy",
  "Primal",
  "Pure Bites",
  "Red Barn",
  "Saint Rocco's",
  "Savage Cat",
  "Savory Prime",
  "Skout's Honor",
  "Snugarooz",
  "Solid Gold",
  "Spunky Pup",
  "Starmark",
  "Stella & Chewy's",
  "Steve's Real Food",
  "Super Snouts Hemp",
  "Suzie's CBD",
  "Tasman's",
  "Tasman's Natural Pet",
  "The Bear & The Rat",
  "Three Dog Bakery",
  "Tropiclean",
  "Tucker's",
  "Twistix",
  "Under the Weather",
  "USA Country Butcher",
  "Vetericyn",
  "Vetriscience",
  "Vital Essentials",
  "Ware",
  "Wellness",
  "Weruva",
  "Wondercide",
  "Worthy Dog",
  "Zippy Paws",
  "Ziwi Peak",
  "Zymox",
];

const catVendors = [
  "Acana",
  "BFF",
  "Capstar",
  "Carna4",
  "Cats in the Kitchen",
  "Comfort Zone",
  "Conair Grooming Tools",
  "Dave's Pet Food",
  "Dr. Elsey's",
  "Drinkwell",
  "Earth Animal",
  "Earthbath",
  "Earthborn",
  "Elanco",
  "Ethical",
  "Feline Pine",
  "Fresh News",
  "Frontline",
  "Fussie Cat",
  "Greenies",
  "Grizzly Pet Products",
  "Homeopet",
  "Honest Kitchen",
  "Instinct",
  "JW Products",
  "Loving Pets",
  "Meowijuana",
  "Messy Mutts",
  "Multipet",
  "Nature's Miracle",
  "NaturVet",
  "Nootie",
  "Nulo",
  "Orijen",
  "Pestell",
  "Pet Mate",
  "Petstages",
  "Primal",
  "Pure Bites",
  "Rawz",
  "Skout's Honor",
  "Stella & Chewy's",
  "Super Snouts Hemp",
  "Suzie's CBD",
  "Taste of the Wild",
  "Tiki Cat",
  "Tomilyn",
  "Tropiclean",
  "TruLux",
  "Van Ness",
  "Vetericyn",
  "Vetriscience",
  "Vital Essentials",
  "Ware",
  "Wellness",
  "Weruva",
  "Wondercide",
  "World's Best Cat Litter",
  "Yeowww! Catnip",
  "Ziwi Peak",
];

const smallAnimalBirdVendors = [
  "A&E",
  "Aspen Bedding",
  "Carefresh Bedding",
  "F.M. Brown",
  "From The Field",
  "JW Products",
  "Oxbow",
  "Sweet Meadow",
  "Vetericyn",
  "Vitakraft",
  "Zoo Med",
  "Zymox",
];

const Vendors = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat' | 'smallanimal'>('dog');

  return (
    <div className="vendors-container">
      {/* Tabs */}
      <div className="tabs flex items-center justify-center font-bold custom-font rounded-t-xl w-[88%] sm:w-[70%] 2xl:w-[60%] mx-auto mt-5 mb-3">
        <button 
          className={`link-underline min-[350px]:text-xl sm:text-2xl md:text-3xl tab ${activeTab === 'dog' ? 'active' : ''}`}
          onClick={() => setActiveTab('dog')}
        >
          Dogs
        </button>
        <button 
          className={`link-underline min-[350px]:text-xl sm:text-2xl md:text-3xl tab ${activeTab === 'cat' ? 'active' : ''}`}
          onClick={() => setActiveTab('cat')}
        >
          Cats
        </button>
        <button 
          className={`link-underline min-[350px]:text-xl sm:text-2xl md:text-3xl tab ${activeTab === 'smallanimal' ? 'active' : ''}`}
          onClick={() => setActiveTab('smallanimal')}
        >
          Small Animals & Birds
        </button>
      </div>

      {/* Vendors Grid */}
      <div className="vendors-grid sm:mx-10 xl:mx-1 2xl:mx-24">
        {activeTab === 'dog' && (
          dogVendors.map((vendor, index) => (
            <div key={index} className={`vendor-item ${index % 2 === 1 ? 'narrow-row' : ''}`}>
              {vendor}
            </div>
          ))
        )}
        
        {activeTab === 'cat' && (
          catVendors.map((vendor, index) => (
            <div key={index} className={`vendor-item ${index % 2 === 1 ? 'narrow-row' : ''}`}>
              {vendor}
            </div>
          ))
        )}
        
        {activeTab === 'smallanimal' && (
          smallAnimalBirdVendors.map((vendor, index) => (
            <div key={index} className={`vendor-item ${index % 2 === 1 ? 'narrow-row' : ''}`}>
              {vendor}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Vendors;