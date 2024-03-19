require('dotenv').config();

import { startApi } from "./modules/api/startApi"
import { Manager } from "./modules/manager";
import { log } from "./utils/log";

async function main() {
    log("Starting Stevie Server");

    // Starting Manager
    const manager = await Manager.load();

    // Starting API
    await startApi(manager);

    log("Stevie Server started");
}

main()