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

export type FirebaseVerificationResponse = {
  message: string;
  user: { uid: string; email?: string; name?: string };
};

export type LifeEntry = {
  _id: string;
  userId: string;
  date: string;
  sleep: number;
  mood: number;
  energy: number;
  focus: number;
  exercise: number;
  studyHours: number;
  screenTime: number;
};

export const authApi = {
  login: (email: string, password: string) =>
    apiRequest<AuthResponse>("/users/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  register: (name: string, email: string, password: string) =>
    apiRequest<AuthResponse>("/users/register", { method: "POST", body: JSON.stringify({ name, email, password }) }),
  verifyFirebaseToken: (idToken: string) =>
    apiRequest<FirebaseVerificationResponse>("/users/google", {
      method: "POST",
      body: JSON.stringify({ idToken }),
    }),
  logout: () => apiRequest<{ message: string }>("/users/logout"),
};

export const entriesApi = {
  getAll: () => apiRequest<{ message: string; entries: LifeEntry[] }>("/entries/all"),
  create: (entry: Omit<LifeEntry, "_id" | "userId">) =>
    apiRequest<{ message: string; entry: LifeEntry }>("/entries/create", {
      method: "POST",
      body: JSON.stringify(entry),
    }),
};
