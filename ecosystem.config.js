module.exports = {
  apps: [
    {
      name: "cat-home",
      script: "pnpm",
      args: "start",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000, // 指定端口
      },
    },
  ],
};
