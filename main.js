import { Worker } from "node:worker_threads";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Main thread started");

const worker = new Worker(
  path.join(__dirname, "worker.js"),
  {
    workerData: 100000000,
  }
);

// Receive the result
worker.on("message", (result) => {
  console.log("Result from worker:", result);
});

// Handle errors
worker.on("error", (error) => {
  console.error("Worker error:", error);
});

// Detect worker completion
worker.on("exit", (code) => {
  console.log("Worker exited with code:", code);
});

console.log("Main thread is still running");
