/**
 * 总路由
 */
const rootRouters = [{
  path: '/',
  component: require('../App').default,
  indexRoute: {
    getComponents(location, callback) {
      require.ensure([], function (require) {
        callback(null, require('../components/Home/index').default)
      })
    }
  },
  childRoutes: [
    // require('./OrganizationalStructure'),
    // require('./DepartmentDetail')
  ]
}];

module.exports = rootRouters;