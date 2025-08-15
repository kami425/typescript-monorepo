const { execSync } = require("child_process");
const modules = require("./modules.json");

for (const lib of modules) {
  console.log(`Building ${lib}...`);
  execSync(`pnpm --parallel --filter ${lib} build`, { stdio: "inherit" });
}
