import "colors";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();

import express, { Application } from "express";
import "reflect-metadata";

import { globalErrorMiddleware } from "./middlewares/global-error.middleware";
import { apiLimiter } from "./middlewares/rateLimit.middleware";
import { setupSwagger } from "./utils/swagger";
import { mountRouter } from "./routers";
import { globalNotFoundMiddleware } from "./middlewares/not-found.middleware";
import { createAdmin } from "./utils";
import { AppDataSource } from "./config/data-source";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(apiLimiter);
// Mount routers
app.use("/", mountRouter);
setupSwagger(app);

// Apply custom middleware
app.all('*', globalNotFoundMiddleware);
app.use(globalErrorMiddleware);

// Initialize Data Source and Run Initial Setup
AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    console.log("Registered Entities:", AppDataSource.entityMetadatas.map(metadata => metadata.name));

    // Run initial functions after Data Source has been initialized
    await createAdmin();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

export { app };
