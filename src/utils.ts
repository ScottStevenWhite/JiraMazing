export const API_BASE_URL = 'https://jira.poly.com/rest/api/2';

export function formatDateString(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export async function makeApiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed with status ${response.status}: ${error}`);
  }

  const data = await response.json();
  return data as T;
}
