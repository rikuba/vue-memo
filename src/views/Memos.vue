<template>
  <div class="memos" :class="{ 'list-only': $route.name === 'Memos' }">
    <div class="memo-list-container">
      <ul class="memo-list">
        <li v-for="memo in memos" :key="memo.id" class="memo-list-item">
          <router-link :to="{ name: 'Memo', params: { memoId: memo.id } }" class="memo-link">
            {{ memo.title || '(無題)' }}
          </router-link>
        </li>
      </ul>
      <div class="actions">
        <button class="add-button" @click="doAdd">
          &#x2795;&#xFE0E;
          <span class="add-button-label">メモを追加</span>
        </button>
      </div>
    </div>
    <div class="memo-detail-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'Memos',
  data () {
    return store.state
  },
  created () {
    store.load()
  },
  methods: {
    doAdd () {
      const memo = store.createMemo()
      store.saveMemo(memo)
      this.$router.push({ name: 'Memo', params: { memoId: memo.id } })
    }
  }
}
</script>

<style scoped>
.memos {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.memo-list-container {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.list-only .memo-list-container {
  width: 100%;
}

.memo-detail-container {
  flex: 1;
}

.memo-list {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  overflow: auto;
}

.memo-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 20px;
  color: #0063a4;
}

.memo-link:hover {
  background: #f4f5f6;
}

.router-link-exact-active {
  color: inherit;
  text-decoration: inherit;
}

.router-link-exact-active:hover {
  background: transparent;
}

.actions {
  margin: 0 0 10px;
}

.add-button {
  display: block;
  width: 100%;
  padding: 10px 20px;
  border: none;
  background: transparent;
  text-align: start;
  font-size: inherit;
  cursor: pointer;
}

.add-button:hover,
.add-button:focus {
  background: #f4f5f6;
}

.add-button-label {
  visibility: hidden;
}

.add-button:hover .add-button-label,
.add-button:focus .add-button-label {
  visibility: visible;
}
</style>
