import { useState } from "react";
import { NavLink } from "react-router";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen">
      <h3 className="font-bold text-center pb-5 pt-5 w-4 text-9xl text-white">
        RGOM <span className="text-stone-500">Movie hub</span>
      </h3>
      <h1 className="text-white font-bold pl-10 text-3xl pb-2">
        Free space for watching movies all you want
      </h1>
      <p className="text-white pl-3">
      </p>
      <div className="flex justify-start pl-10 gap-10 p-9">

        <NavLink to="/movies"
        className="bg-stone-600 rounded-3xl text-white font-semibold py-2 px-4 hover:bg-stone-900"
        >
          Click to watch movies
        </NavLink>
    
        <button
          onClick={() => setShowModal(true)} 
          className="border-2 border-white rounded-3xl text-white font-semibold py-2 px-4 hover:bg-blue-900"
        >
          search up
        </button>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-300 rounded-3xl p-6 w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Search a Movie to Download</h2>
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full mb-4 p-2 border rounded-3xl border-gray-300 bg-gray-100"
            />
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
