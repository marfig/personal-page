const base_url = "https://gitlab.com/api/v4/users/marvin.figueredo";

export async function listProjectsApi() {
  try {
    const url = `${base_url}/projects`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
