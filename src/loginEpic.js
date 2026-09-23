import { chromium } from "playwright";
import { config, validateConfig } from "./config.js";

const STORAGE_PATH = 'storage/epic-sesion.json';

export async function loginEpic(){
    validateConfig('epic');
    await console.log('teste')
}

loginEpic();