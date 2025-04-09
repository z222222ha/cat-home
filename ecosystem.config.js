module.exports = {
  apps: [
    {
      name: "cat-home-page",
      script: "npm",
      args: "run start",
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
