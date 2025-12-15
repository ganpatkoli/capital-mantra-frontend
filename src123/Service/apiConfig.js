const API_BASE = "http://localhost:5000/api/ipo";

export async function getAllIpos() {
  try {
    const res = await fetch(`${API_BASE}/all`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch IPOs");
    return await res.json();
  } catch (err) {
    console.error("API ERROR (ALL IPO):", err);
    return [];
  }
}

export async function getUpcomingIpos() {
  try {
    const res = await fetch(`${API_BASE}/upcoming`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getActiveGmpIpos() {
  try {
    const res = await fetch(`${API_BASE}/gmp/active`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getActiveMainboard() {
  try {
    const res = await fetch(`${API_BASE}/mainboard/active`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getActiveSme() {
  try {
    const res = await fetch(`${API_BASE}/sme/active`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getOpenIpos() {
  try {
    const res = await fetch(`${API_BASE}/open`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getClosingToday() {
  try {
    const res = await fetch(`${API_BASE}/closing-today`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}

export async function getListedIpos() {
  try {
    const res = await fetch(`${API_BASE}/listed`, { cache: "no-store" });
    return await res.json();
  } catch {
    return [];
  }
}
