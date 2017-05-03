module.exports = {
  path: 'm1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./component/index').default)
    })
  }
}