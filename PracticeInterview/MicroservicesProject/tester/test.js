const autocannon = require('autocannon');

const runBenchmark = () => {
    const instance = autocannon({
        url: 'http://localhost:3000', // Target URL
        duration: 30,                // Test duration in seconds
        connections: 100,            // Number of simultaneous connections
        pipelining: 1,               // Number of pipelined requests
        method: 'GET',               // HTTP method
        headers: {                   // Optional headers
            'Content-Type': 'application/json'
        }
    });

    autocannon.track(instance); // Display results in real-time

    instance.on('done', () => {
        console.log('Benchmark completed');
    });
};

runBenchmark();
