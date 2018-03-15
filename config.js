const env = process.env;

env.port = env.port || '8080';

export default {
  'port':env.port
};
