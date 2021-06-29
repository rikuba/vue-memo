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
      <div class="actions">
        <button class="add-button" @click="doAdd">
          &#x2795;&#xFE0E;
          <span class="add-button-label">メモを追加</span>
        </button>
      </div>
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
