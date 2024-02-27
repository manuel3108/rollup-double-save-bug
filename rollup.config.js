import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import fs from "fs";

// const composerFolders = fs
//     .readdirSync("./projects/composers/", { withFileTypes: true })
//     .filter((item) => item.isDirectory())
//     .map((item) => item.name);
// const composerNamesAsString = composerFolders.map((x) => `"${x}"`);

function getConfig(project, isComposer) {
    const input = `./projects/${project}/index.ts`
    const outDir = `./projects/${project}/build`;
    const tsConfig = `./projects/${project}/tsconfig.json`;

    fs.rmSync(outDir, { force: true, recursive: true });

    const config = {
        input: input,
        output: {
            dir: outDir,
            format: "esm",
        },
        plugins: [
            typescript({ tsconfig: tsConfig, module: "node16", include: ["**/*.ts", "**/package.json"] }),
            nodeResolve({ preferBuiltins: true }),
            commonjs(),
            json(),
            dynamicImportVars(),
        ],
    };

    return config;
}


export default [
    getConfig("core", false),
    getConfig("tools", false),
];
