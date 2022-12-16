/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: 'http://localhost:3000',
    MONGODB_DEV_URL:'mongodb+srv://admin:3ffyMMnqMd9aNeFs@cluster0.knezrxl.mongodb.net/teacher-bookingDB?retryWrites=true&w=majority',
    ACCESS_TOKEN_SECRET: 'N-;u-Z-K;n)XQCY[d"RM)yh&)3,;;,UgPE+gvr[9A7@;r^][.',
    REFRESH_TOKEN_SECRET:
      ',te?fmewX9J!usNBW-%)xRUrF6#KP-n<Bp-jq{A/hP{!]7f"UCQ#tWzbAmv)B]9p#M!-V*QZ?K~p4z;',
  },
}

module.exports = nextConfig
