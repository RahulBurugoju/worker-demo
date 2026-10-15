import {parentPort,workerData} from "worker_threads";

console.log("Worker started");

function CalculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

let result = CalculateSum(workerData);

parentPort.postMessage(result)