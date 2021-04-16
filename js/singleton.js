//  单例模式
class Store {
  constructor() {
    this.state = {}
  }
  getState(stateName){
    return this.state[stateName]
  }
  setState(stateName, val){
    this.state[stateName] = val
  }
  static isInstance() {
    return function () {
      if (!Store.instance) {
        Store.instance = new Store()
      }
      return Store.instance
    }
  }
}
let store = Store.isInstance()()
let store1 = Store.isInstance()()
store.setState('test','test')
console.log(store.getState('test'),store1.getState('test'))
