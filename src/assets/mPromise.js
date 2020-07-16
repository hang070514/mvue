/**
 * Created by zhang on 2019/11/1.
 */
function Promise(executor){
  var _this = this
  this.state = 'pending'
  this.value = undefined
  this.reason = undefined
  this.onFulFilledFunc = []
  this.onRejectedFunc = []

  function resolve(value){
    if(_this.status === 'pending'){
      _this.value = value
      _this.onFulFilledFunc.forEach(fn => fn(value))
      _this.status = 'resolved'
    }
  }

  function reject(reason){
    if(_this.status === 'pending'){
      _this.reason = reason
      _this.onRejectedFunc.forEach(fn => fn(reason))
      _this.status = 'rejected'
    }
  }

  executor(resolve,reject)
}

Promise.prototype.then = function(onFulfilled,onRejected){
  if(this.state === 'resolved'){
    onFulfilled(this.value)
  }

  if(this.state === 'rejected'){
    onRejected(this.reason)
  }

  if(this.state === 'pending'){
    this.onFulFilledFunc.push(onFulfilled);
    this.onRejectedFunc.push(onRejected);
  }
}
module.exports = Promise
