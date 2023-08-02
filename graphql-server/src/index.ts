// src/index.ts

// 1
import { createServer } from 'node:http';
import { schema } from './schema';
import { createYoga } from 'graphql-yoga';

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({ schema });

const server = createServer(yoga);
// 4
server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
