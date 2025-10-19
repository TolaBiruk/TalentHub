// src/pages/Jobs.jsx

// src/components/JobCard.jsx
export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <h2 className="text-lg font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="mt-2">{job.description}</p>
      <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg">
        Apply
      </button>
    </div>
  );
}
