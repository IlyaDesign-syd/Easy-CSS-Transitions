// next.config.js
module.exports = {
    async headers() {
        return [
        {
            source: "/(.*)", // Apply to all routes
            headers: [  
            {
                key: "Access-Control-Allow-Origin",
                value: "*",
            },
            {
                key: "Access-Control-Allow-Methods",
                value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
                key: "Access-Control-Allow-Headers",
                value: "X-Requested-With, Content-Type, Authorization",
            },
            ],
        },
        ];
    },
    };