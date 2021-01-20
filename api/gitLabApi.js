const base_url = "https://gitlab.com/api/v4";
const user = "/users/marvin.figueredo";

export async function listProjectsApi() {
  try {
    const url = `${base_url}${user}/projects`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLanguagesProjectApi(project_id) {
  try {
    const url = `${base_url}/projects/${project_id}/languages`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
