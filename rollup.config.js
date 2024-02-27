import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';

function getConfig(project) {
    const input = `./projects/${project}/index.ts`;
    const outDir = `./projects/${project}/build`;
    const tsConfig = `./projects/${project}/tsconfig.json`;

    fs.rmSync(outDir, { force: true, recursive: true });

    const config = {
        input: input,
        output: {
            dir: outDir,
            format: 'esm',
        },
        plugins: [
            typescript({
                tsconfig: tsConfig,
                module: 'node16',
                include: ['**/*.ts', '**/package.json'],
            }),
            nodeResolve({
                preferBuiltins: true,
            }),
        ],
    };

    return config;
}

export default [getConfig('core'), getConfig('tools')];
