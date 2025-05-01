"use client";

import Filters from "@/components/Filters";
import DoctorCard from "@/components/DoctorCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

const DoctorsPage = () => {
  interface Doctor {
    _id: string;
    name: string;
    specialization: string;
    // Add other fields as per your API response
  }

  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("http://localhost:5000/api/doctor/list-doctors?page=1&limit=10");
      const data = await res.json();
      setDoctors(data.data || []);
      console.log(data.data);
    };

    fetchDoctors();
  }, []);

  return (
    <main className="min-h-screen flex bg-white text-black">
      <aside className="w-72 border-r px-4 py-6">
        <Filters />
      </aside>

      <section className="flex-1 px-8 py-6">
        <p className="text-sm text-gray-500">Home &gt; Doctors &gt; General Physicians</p>
        <h1 className="text-2xl font-bold mt-2">
          Consult General Physicians Online - Internal Medicine Specialists
        </h1>
        <p className="text-gray-600 mb-4">(761 doctors)</p>

        {/* Sorting */}
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <select className="border px-3 py-1 rounded">
            <option value="relevance">Relevance</option>
            <option value="experience">Experience</option>
            <option value="fees">Fees</option>
          </select>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-4">
          {doctors.length === 0 ? (
            <p>No doctors found</p>
          ) : (
            doctors.map((doc) => <DoctorCard key={doc._id} doctor={doc} />)
          )}
        </div>
      </section>
    </main>
  );
};

export default DoctorsPage;
