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
    <div class="memo-detail-container"><router-view /></div>
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
  flex: 1;
  overflow: auto;
}

.memo-detail-container {
  width: 70%;
}

.memo-detail-container:empty {
  display: none;
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
  color: #0063a4;
}

.memo-link.router-link-exact-active {
  color: inherit;
  text-decoration: inherit;
}

.memo-link:not(.router-link-exact-active):hover {
  background: #f4f5f6;
}
</style>

<script>
import { store } from '../store'

export default {
  name: 'Memos',
  data () {
    return store.state
  },
  created () {
    store.load()
  }
}
</script>
