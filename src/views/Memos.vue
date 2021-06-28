<template>
  <div class="memos">
    <div class="memo-list-container">
      <ul class="memo-list">
        <li class="memo-list-item" v-for="memo in memos" :key="memo.id">
          <router-link class="memo-link" :to="{ name: 'Memo', params: { memoId: memo.id } }">
            {{ memo.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="memo-detail-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.memos {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.memo-list-container {
  width: 25%;
  font-size: 0.875rem;
}

.memo-detail-container {
  flex: 1;
}

.memo-list {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
}

.memo-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 20px;
}

.memo-link:hover {
  background: #f4f5f6;
}

.memo-link.router-link-exact-active {
  color: inherit;
  text-decoration: inherit;
}
</style>

<script>
export default {
  name: 'Memos',
  data () {
    return {
      memos: [
        { id: '0', title: 'HTMLとCSS' },
        { id: '1', title: 'Linuxの使い方' },
        { id: '2', title: 'GitとGitHubについて' },
        { id: '3', title: 'RubyとRuby on Rails' },
        { id: '4', title: 'オブジェクト指向プログラミング' }
      ]
    }
  }
}
</script>
