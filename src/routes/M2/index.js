module.exports = {
  path: 'm2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./component/index'))
    })
  }
}