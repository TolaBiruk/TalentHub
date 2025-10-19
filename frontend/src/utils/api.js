
// src/utils/api.js
const API_BASE_URL = 'http://localhost:3001/api'; // Update with your backend URL

// Generic fetch function
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

// Auth endpoints
export async function register(userData) {
  return fetchAPI('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

export async function login(credentials) {
  return fetchAPI('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

// Job endpoints
export async function getJobs() {
  return fetchAPI('/jobs');
}

export async function createJob(jobData, token) {
  return fetchAPI('/jobs', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(jobData),
  });
}

export async function deleteJob(jobId, token) {
  return fetchAPI(`/jobs/${jobId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}

// Application endpoints
export async function applyForJob(applicationData, token) {
  return fetchAPI('/applications', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(applicationData),
  });
}

export async function getUserApplications(userId, token) {
  return fetchAPI(`/applications/${userId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}