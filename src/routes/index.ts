import { Router } from "express";
import fs from "fs";
import path from "path";

const routes = Router();
const modulesPath = path.join(__dirname, "../modules");

// Lê todas as pastas dentro de src/modules
fs.readdirSync(modulesPath).forEach((moduleFolder) => {
  const routeFile = path.join(modulesPath, moduleFolder, `${moduleFolder}.routes.ts`);
  if (fs.existsSync(routeFile)) {
    import(routeFile).then((mod) => {
      if (mod.default) {
        routes.use(`/${moduleFolder}`, mod.default);
        console.log(`✅ Rota carregada automaticamente: /${moduleFolder}`);
      }
    });
  }
});

export default routes;
