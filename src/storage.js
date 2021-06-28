const storage = {
  key: 'vue-memo',
  save (data) {
    localStorage[this.key] = JSON.stringify(data)
  },
  load () {
    const json = localStorage[this.key]
    return json ? JSON.parse(json) : null
  }
}

export { storage }
