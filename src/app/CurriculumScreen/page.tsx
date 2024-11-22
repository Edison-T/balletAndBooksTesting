'use client';
import React, { useState } from 'react';
import Layout from '../../../components/Layout';

const CurriculumScreen = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const weeks = [
    { id: 1, title: 'Week 1' },
    { id: 2, title: 'Week 2' },
    { id: 3, title: 'Week 3' },
    { id: 4, title: 'Week 4' },
    { id: 5, title: 'Week 5' },
    { id: 6, title: 'Week 6' },
  ];

  const toggleWeek = (weekId) => {
    setExpandedWeek(weekId === expandedWeek ? null : weekId);
  };

  const expandAll = () => {
    setExpandedWeek('all');
  };

  const renderWeekContent = (weekId) => (
    <div className="ml-4 mt-2 text-gray-600">
      <p>This is the content for {weeks.find((week) => week.id === weekId)?.title}.</p>
    </div>
  );

  return (
    <Layout>
      <div className="bg-white p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Curriculum */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Curriculum</h1>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={expandAll}
              >
                Expand All
              </button>
            </div>
            <p className="mb-4 text-gray-600">
              This week is <span className="font-bold">week 3</span>.
            </p>
            <div className="border border-gray-200 rounded-md">
              {weeks.map((week) => (
                <div key={week.id} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggleWeek(week.id)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-black hover:bg-gray-100 focus:outline-none"
                  >
                    {week.title}
                  </button>
                  {(expandedWeek === week.id || expandedWeek === 'all') &&
                    renderWeekContent(week.id)}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Calendar */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0 md:pl-6">
            <h2 className="text-lg font-bold mb-2">October 2024</h2>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="font-bold text-gray-500">
                  {day}
                </div>
              ))}
              {[...Array(31).keys()].map((day) => {
                const currentDate = day + 1;
                return (
                  <div
                    key={currentDate}
                    className={`p-2 rounded ${
                      currentDate === 30 ? 'bg-blue-500 text-white' : 'text-gray-700'
                    }`}
                  >
                    {currentDate}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CurriculumScreen;
