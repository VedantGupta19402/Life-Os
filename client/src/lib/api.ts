const API_BASE = "/api";

type ApiError = { message?: string };

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  const payload = (await response.json().catch(() => ({}))) as T & ApiError;

  if (!response.ok) {
    throw new Error(payload.message ?? "Something went wrong. Please try again.");
  }

  return payload;
}

export type AuthResponse = {
  message: string;
  user: { id: string; name: string; email: string };
};

export const authApi = {
  login: (email: string, password: string) =>
    apiRequest<AuthResponse>("/users/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  register: (name: string, email: string, password: string) =>
    apiRequest<AuthResponse>("/users/register", { method: "POST", body: JSON.stringify({ name, email, password }) }),
  logout: () => apiRequest<{ message: string }>("/users/logout"),
};
