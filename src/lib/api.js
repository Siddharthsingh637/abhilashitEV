const API_PREFIX = "/api";
const LOCAL_API_BASE_URL = "http://localhost:4000";

function normalizeBaseUrl(value) {
  return String(value || "").trim().replace(/\/$/, "");
}

function normalizePath(path) {
  if (!path) return API_PREFIX;
  if (path.startsWith(API_PREFIX)) return path;
  if (path.startsWith("/")) return `${API_PREFIX}${path}`;
  return `${API_PREFIX}/${path}`;
}

export function getApiBaseUrl() {
  const configuredBaseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL);
  if (configuredBaseUrl) return configuredBaseUrl;

  if (typeof window !== "undefined") {
    const { hostname } = window.location;
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1") {
      return LOCAL_API_BASE_URL;
    }
  }

  return "";
}

export function buildApiUrl(path) {
  return `${getApiBaseUrl()}${normalizePath(path)}`;
}

async function parseJsonSafe(response) {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function requestJson(path, options = {}) {
  const response = await fetch(buildApiUrl(path), {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
  });

  const data = await parseJsonSafe(response);

  if (!response.ok) {
    const message =
      data && (data.message || data.error)
        ? data.message || data.error
        : typeof data === "string" && data
          ? data
          : `API request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data;
}
