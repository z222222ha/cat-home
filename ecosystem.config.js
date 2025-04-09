module.exports = {
  apps: [
    {
      name: "cat-home-page",
      script: "npm",
      args: "start",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
