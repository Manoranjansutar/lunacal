import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlusCircle, HelpCircle } from 'lucide-react';

const ProfileGallery = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  useEffect(() => {
    const activeTabElement = tabsRef.current[tabs.indexOf(activeTab)];
    if (activeTabElement) {
      setIndicatorStyle({
        width: `${activeTabElement.offsetWidth}px`,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-end min-h-screen bg-gray-900">
      <div className="w-1/2 p-6 text-gray-300">
        {/* Profile Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <HelpCircle className="text-gray-500" />
            <div className="relative flex p-1 space-x-2 bg-gray-800 rounded-full">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 relative z-10 ${
                    activeTab === tab ? 'text-white' : 'text-gray-500'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
              <div
                className="absolute transition-all duration-300 ease-out bg-gray-700 rounded-full top-1 left-1"
                style={{
                  height: 'calc(100% - 8px)',
                  ...indicatorStyle,
                }}
              />
            </div>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-sm">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            </p>
            <p className="mt-2 text-sm">
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold">Gallery</h2>
            <button className="flex items-center px-3 py-1 space-x-1 text-sm bg-gray-700 rounded-full">
              <PlusCircle size={16} />
              <span>ADD IMAGE</span>
            </button>
          </div>
          <div className="flex space-x-4">
            {[1, 2, 3].map((img) => (
              <div key={img} className="w-1/3">
                <img src="/api/placeholder/120/120" alt="Gallery image" className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button className="p-1 bg-gray-700 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 bg-gray-700 rounded-full">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGallery;