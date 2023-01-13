module.exports = {
  apps: [
    {
      name: 'enochmaryfront',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}