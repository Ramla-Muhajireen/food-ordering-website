const API_BASE = "http://localhost:9000";

export const getDishes = async () => {
  const res = await fetch(`${API_BASE}/api/dishes`);
  return res.json();
};

export const IMAGE_URL = `${API_BASE}/uploads/`;
