export const store = {
  state: {
    memos: [
      { id: '0', title: 'HTMLとCSS' },
      { id: '1', title: 'Linuxの使い方' },
      { id: '2', title: 'GitとGitHubについて' },
      { id: '3', title: 'RubyとRuby on Rails' },
      { id: '4', title: 'オブジェクト指向プログラミング' }
    ]
  },
  getAllMemos () {
    return this.state.memos
  }
}
