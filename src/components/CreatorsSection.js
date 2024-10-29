import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons

// Sample data for creators
const creatorsData = [
  {
    name: "Suraj Poudel",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEvhvnkRN3kBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719322186159?e=1735171200&v=beta&t=IegMdRe8HTxjjkiodoDgVfms08ARb7NXKe7BtbqL3nc",
    instagramUrl: "https://www.instagram.com/thesurajpoudel/",
    linkedinUrl: "https://www.linkedin.com/in/suraj-poudel/",
  },
  {
    name: "Yogesh Dhungana",
    image: "https://media.licdn.com/dms/image/v2/C5603AQEpUiAygyYbgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661447617402?e=1735171200&v=beta&t=ySbGCMAts_elkloaNLhXw0Jlm_rhTA1d06WnJU5RACI",
    instagramUrl: "https://www.instagram.com/yo_gesh.dhungana/",
    linkedinUrl: "https://www.linkedin.com/in/yogesh-dhungana/",
  },
  {
    name: "Sudip Bhai Subedi",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEcRHG1sjol4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681869430624?e=1735776000&v=beta&t=7ErgjlTkzH46NYCJaI5d5iNR5cqsvFoBNhS8qY7eiy4",
    instagramUrl: "https://www.instagram.com/sudipbhaisubedi/",
    linkedinUrl: "https://www.linkedin.com/in/sudipbhai/",
  },
  // Add more creators as needed
];

// CreatorCard component
const CreatorCard = ({ creator }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-48 h-60"> {/* Increased height */}
      <img
        src={creator.image}
        alt={creator.name}
        className="w-24 h-24 object-cover rounded-full mb-2 mx-auto" // Circular image
      />
      <h6 className="text-md text-center font-semibold">{creator.name}</h6>

      <div className="flex justify-center gap-2 mt-2">
        <a
          href={creator.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300 flex items-center gap-1"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href={creator.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

// CreatorsSection component
const CreatorsSection = () => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Creators & Influencers</h2>
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {creatorsData.map((creator) => (
          <CreatorCard key={creator.name} creator={creator} />
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
