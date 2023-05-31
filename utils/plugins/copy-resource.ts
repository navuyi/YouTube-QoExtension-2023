import * as fs from 'fs';
import * as path from 'path';
import colorLog from '../log';
import { PluginOption } from 'vite';

const { resolve } = path;

const root = resolve(__dirname, '..', '..');
const resource = resolve(root, 'src', 'templates', 'content', 'style.css'); // Path to resource in project
const outDir = resolve(__dirname, '..', '..', 'public');

export default function copyResource(path: string[], filename: string): PluginOption {
  return {
    name: 'make-manifest',
    buildEnd() {
      fs.copyFileSync(resolve(root, ...path), resolve(outDir, filename));
      colorLog(`Resource ${filename} copied`, 'success');
    },
  };
}
