import {ConfigEnv, loadEnv, UserConfigExport} from 'vite'

import {BuildPaths} from "./config/build/types/config";
import {buildViteConfig} from "./config/build/buildViteConfig";
import path from "path";

import * as dotenv from 'dotenv';

export default ({mode}: ConfigEnv) => {

  const paths: BuildPaths = {
    // build: path.resolve(__dirname, 'dist'),
    // entry: path.resolve(__dirname, 'src', 'index.tsx'),
    // html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, './src'),
    envDir: path.resolve(__dirname, 'config/env')
  }

  const envFile = dotenv.config({ path: `${paths.envDir}/.env.${mode}` });
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  console.log(mode)

  const PORT = parseInt(envFile.parsed.APP_PORT) || 3000;
  const HOST = envFile.parsed.APP_HOST || 'localhost'
  const isDev = mode === 'development'

  return buildViteConfig({
    isDev,
    mode: mode || 'development',
    port: PORT,
    envDir: paths.envDir,
    host: HOST,
    paths
  })
}
