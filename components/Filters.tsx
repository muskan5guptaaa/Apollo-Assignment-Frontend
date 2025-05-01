const Filters = () => {
    return (
      <div className="space-y-6">
        <button className="w-full bg-blue-500 text-white py-2 rounded">Show Doctors Near Me</button>
  
        <div>
          <h3 className="font-semibold mb-2">Mode of Consult</h3>
          <label className="block">
            <input type="checkbox" defaultChecked /> Hospital Visit
          </label>
          <label className="block">
            <input type="checkbox" defaultChecked /> Online Consult
          </label>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">Experience (In Years)</h3>
          {["0-5", "6-10", "11-16"].map((range) => (
            <label key={range} className="block">
              <input type="checkbox" /> {range}
            </label>
          ))}
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">Fees (In Rupees)</h3>
          {["100-500", "500-1000", "1000+"].map((range) => (
            <label key={range} className="block">
              <input type="checkbox" /> {range}
            </label>
          ))}
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">Language</h3>
          {["English", "Hindi", "Telugu"].map((lang) => (
            <label key={lang} className="block">
              <input type="checkbox" /> {lang}
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default Filters;
  