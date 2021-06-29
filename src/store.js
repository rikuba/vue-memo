import { storage } from './storage'

export const store = {
  storage,

  state: {
    memos: [],
    nextMemoId: 0
  },

  load () {
    const state = this.storage.load()
    Object.assign(this.state, state)
  },

  getAllMemos () {
    return this.state.memos
  },

  getMemo (id) {
    return this.state.memos.find((memo) => memo.id === id)
  },

  createMemo () {
    return {
      id: this.state.nextMemoId++,
      title: '新規メモ',
      content: '新規メモ'
    }
  },

  saveMemo (memo) {
    this.state.memos.push(memo)
    this.storage.save(this.state)
  },

  updateMemo (id, { content }) {
    const memo = this.getMemo(id)
    const title = /.+/.exec(content)?.[0] ?? ''
    Object.assign(memo, { title, content })
    this.storage.save(this.state)
  },

  removeMemo (id) {
    const index = this.state.memos.findIndex((memo) => memo.id === id)
    if (index >= 0) {
      this.state.memos.splice(index, 1)
    }
    this.storage.save(this.state)
  }
}
