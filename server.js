const fastify = require('fastify')();

const startServer = () => {
    try {
        fastify.listen(3000, (err, port) => {
            if (err) return err;
            console.log(`Server is running on ${port}`);
        });
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

startServer();