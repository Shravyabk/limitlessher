import React, { useEffect, useState } from 'react';

type Hackathon = {
  name: string;
  url: string;
  date: string;
};

const HackathonList = () => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/hackathons');
        const data = await response.json();
        if (response.ok) {
          setHackathons(data);
        } else {
          setError('Unable to fetch hackathons.');
        }
      } catch (error) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Hackathons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-blue-700">{hackathon.name}</h2>
            <p className="text-gray-600 mt-2">Deadline: <span className="font-medium">{hackathon.date}</span></p>
            <a
              href={hackathon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Hackathon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
