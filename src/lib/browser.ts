import env from "@env";
import type { Browser } from "puppeteer-core";
import * as puppeteer from "puppeteer-core";

let browser: Browser;

const executablePath = ``;

export const getBrowser = async () => {
  if (!browser)
    browser =
      env.NODE_ENV === "development"
        ? await puppeteer.launch({
            executablePath,
            headless: false,
          })
        : await puppeteer.launch({
            executablePath,
            headless: true,
          });

  return browser;
};

export default getBrowser;
