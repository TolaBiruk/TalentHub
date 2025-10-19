// src/pages/Home.jsx
import JobCard from "../components/JobCard";

const jobs = [
  { id: 1, title: "Frontend Developer", description: "React + Tailwind", company: "Acme Ltd" },
  { id: 2, title: "Backend Developer", description: "Node.js + MongoDB", company: "TechCorp" },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Available Jobs</h1>
      <div className="grid gap-4">
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
