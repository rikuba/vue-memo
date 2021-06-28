export const store = {
  state: {
    memos: [
      {
        id: '0',
        title: 'HTMLとCSS',
        content: `HTMLとCSS
<style>
body {
  background-color: #eee;
}
</style>`
      },
      {
        id: '1',
        title: 'Linuxの使い方',
        content: `Linuxの使い方

vi: テキストエディタ`
      },
      {
        id: '2',
        title: 'GitとGitHubについて',
        content: `GitとGitHubについて
- git pull
  - git fetch
  - git merge
`
      },
      {
        id: '3',
        title: 'RubyとRuby on Rails',
        content: 'RubyとRuby on Rails'
      },
      {
        id: '4',
        title: 'オブジェクト指向プログラミング',
        content: `オブジェクト指向プログラミング

(OOP)`
      }
    ]
  },
  getAllMemos () {
    return this.state.memos
  },
  getMemo (id) {
    return this.state.memos.find((memo) => memo.id === id)
  },
  updateMemo (id, { content }) {
    const memo = this.getMemo(id)
    const title = /.+/.exec(content)?.[0] ?? ''
    Object.assign(memo, { title, content })
  },
  removeMemo (id) {
    const index = this.state.memos.findIndex((memo) => memo.id === id)
    if (index >= 0) {
      this.state.memos.splice(index, 1)
    }
  }
}
