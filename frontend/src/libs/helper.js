import path from "path";
import { fileURLToPath } from "url";

const getDirNameFromURL = function(moduleUrl) {
  const __filename = fileURLToPath(moduleUrl);
  return path.dirname(__filename);
};

export default function getDirName() {
  return getDirNameFromURL(import.meta.url);
};
