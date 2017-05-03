/**
 * 总路由
 */
const rootRouters = [{
  path: '/',
  component: require('../App').default,
  indexRoute: {
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/Home').default)
      })
    }
  },
  childRoutes: [
    require('./M1'),
    require('./M2')
  ]
}];

module.exports = rootRouters;