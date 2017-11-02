
const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://vx.kk666.xin/api/' : 'api/'
}