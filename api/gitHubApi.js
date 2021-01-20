const base_url = "https://api.github.com";
const user = "/marfig";

export async function listReposApi() {
  try {
    const url = `${base_url}/users${user}/repos`;
    const params = {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLanguagesRepoApi(repo_name) {
  try {
    const url = `${base_url}/repos${user}/${repo_name}/languages`;
    const params = {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();

    const keys = Object.keys(result);

    let total = 0;

    keys.forEach((k) => {
      total += result[k];
    });

    keys.forEach((k) => {
      let percent = (result[k] / total) * 100;
      result[k] = percent.toFixed(2);
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
