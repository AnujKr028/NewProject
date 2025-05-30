"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTrophy, faSearch, faDiagramProject, faUsers } from '@fortawesome/free-solid-svg-icons';

const Hackathons = () => {
  const hackathons = [
    {
      name: "nights",
      desc: "Nights Season 1 is an exciting event where people from all fields come together to work on their ideas and create amazing projects...",
      img: "/a.png"
    },
    {
      name: "gpt wrapper hackathon",
      desc: "The gpt wrapper hackathon is a global online competition where participants build innovative AI applications...",
      img: "/b.png"
    },
    {
      name: "nexathon",
      desc: "Enter the metagame of hackathons...",
      img: "/c.png"
    },
    {
      name: "screenpipe computer use hackathon",
      desc: "A hackathon focused on innovative screen sharing solutions...",
      img: "/d.png"
    }
  ];

  return (
    <>
      <div className="flex justify-center mt-15 px-4 sm:px-8">
        <div className="flex flex-col gap-5 p-6 sm:p-9 items-center justify-center w-full max-w-7xl">
          {hackathons.map((hackathon, index) => (
            <a
              key={index}
              href={`/hackathon-pages/${hackathon.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col sm:flex-row border border-gray-300 rounded-lg p-5 gap-4 sm:gap-8 items-center w-full sm:w-[700px] hover:bg-gray-100 cursor-pointer"
            >
              <img src={hackathon.img} alt="Hackathon" className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-mono pb-3">{hackathon.name}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-4 font-mono">{hackathon.desc}</p>
                <p className="text-xs sm:text-sm text-gray-700 mt-5 font-mono">
                  <FontAwesomeIcon icon={faCalendar} className="text-xs pr-2" /> 2/4/2025 - 5/4/2025
                </p>
              </div>
              <div className="text-left sm:text-right mt-4 sm:mt-0">
                <p className="text-xs sm:text-sm text-sky-700 pt-2 pb-2">
                  <FontAwesomeIcon icon={faTrophy} className="pr-2" /> $500
                </p>
                <p className="text-xs sm:text-sm text-gray-700 pt-2 pb-2">
                  <FontAwesomeIcon icon={faDiagramProject} className="pr-2" /> 1 Project
                </p>
                <p className="text-xs sm:text-sm text-gray-700 pt-2 pb-2">
                  <FontAwesomeIcon icon={faUsers} className="pr-2" /> 35 Participants
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hackathons;
