import { useState } from 'react';
import { PropTypes } from "prop-types";
const ReportForm = ({ onGenerateReport }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    await onGenerateReport(startDate, endDate); // Pass dates to parent component or function
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background-color p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-primary-color mb-4">Generate Report</h2>

      <label className="block text-secondary-color mb-2">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 border border-gray-color rounded mb-4"
        required
      />

      <label className="block text-secondary-color mb-2">End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 border border-gray-color rounded mb-4"
        required
      />

      <button type="submit" className="w-full p-3 bg-btn-bg hover:bg-btn-bg-hover text-white rounded">
        Generate Report
      </button>
    </form>
  );
};
ReportForm.propTypes = {
  onGenerateReport: PropTypes.func.isRequired,
}
export default ReportForm;
