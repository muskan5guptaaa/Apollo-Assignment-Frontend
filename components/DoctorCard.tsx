const DoctorCard = ({ doctor }: { doctor: any }) => {
  return (
    <div className="border rounded p-4 flex gap-4 items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={doctor.image || "/doctor-placeholder.jpg"}
          alt={doctor.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold text-lg">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
          <p className="text-sm text-gray-500">
            {doctor.experience} YEARS • {doctor.qualification}
          </p>
          <p className="text-sm text-gray-500">{doctor.location}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold text-lg">
          ₹{doctor.consultationFee || 0}
        </p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
          Consult Online
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
