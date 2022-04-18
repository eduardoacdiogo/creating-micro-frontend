import { registerApplication, start } from "single-spa";

fetch("https://625c237f50128c57020b7aa2.mockapi.io/api/v1/applications")
  .then((resp) => resp.json())
  .then((data) => {
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
