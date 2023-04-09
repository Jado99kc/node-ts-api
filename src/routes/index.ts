import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (filename: string) => {
  return filename.split(".").shift();
};

readdirSync(PATH_ROUTER).map((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}.routes`).then((moduleRouter) => {
      console.log(`Loading routes ${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export default router;
