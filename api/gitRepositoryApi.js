import { GITHUB_REPO, GITLAB_REPO } from "../utils/constants";
import { listReposApi } from "./gitHubApi";
import { listProjectsApi } from "./gitLabApi";

export function getPortfolioContent(lan) {
  const items = [
    {
      title: "Repositorios",
      loadingText: "Cargando...",
      lan: "es",
    },
    {
      title: "Repositories",
      loadingText: "Loading...",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}

export async function listAllRepoApi() {
  const list_filter_lab = [
    "tienda-servicios",
    "metas-api",
    "web-api-core",
    "hotel-react-gatsby",
    "my-taxes",
  ];
  const list_filter_hub = [
    "mis-metas",
    "personal-page",
    "historial-clinico",
    "dashboard",
    "mis-metas",
  ];
  const finalResult = [];

  try {
    const resultLab = await listProjectsApi();
    const filterResultLab = resultLab.filter((c) =>
      list_filter_lab.includes(c.path)
    );

    const resultHub = await listReposApi();
    const filterResultHub = resultHub.filter((c) =>
      list_filter_hub.includes(c.name)
    );

    filterResultLab.forEach((item) => {
      finalResult.push({
        id: item.id,
        name: item.name,
        description: item.description,
        url: item.http_url_to_repo,
        upd: new Date(item.last_activity_at),
        type: GITLAB_REPO,
      });
    });

    filterResultHub.forEach((item) => {
      finalResult.push({
        id: item.id,
        name: item.name,
        description: item.description,
        url: item.html_url,
        upd: new Date(item.updated_at),
        type: GITHUB_REPO,
      });
    });

    return finalResult;
  } catch (error) {
    console.log(error);
    return null;
  }
}
