/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  // Map是有序的
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const value = this.cache.get(key) ?? -1;
  if (value !== -1) {
    this.cache.delete(key);
    this.cache.set(key, value);
  }
  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    const k = this.cache.keys().next().value;
    this.cache.delete(k);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */