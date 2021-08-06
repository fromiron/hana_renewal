module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8711),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '967364b5cd1667c92022add85f7b2a0a'),
    },
  },
});
