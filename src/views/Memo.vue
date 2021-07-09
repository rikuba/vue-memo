<template>
  <div class="memo">
    <div v-if="memo" class="memo-view">
      <textarea ref="textarea" :value="memo.content"></textarea>
      <div class="actions">
        <button class="edit-button" @click="doUpdate">編集</button>
        <button class="delete-button" @click="doDestroy">削除</button>
      </div>
    </div>
    <div v-else class="memo-not-found">
      <p>メモが見つかりません</p>
    </div>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'Memo',
  data () {
    return {
      memo: { content: '' }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.memo = store.getMemo(to.params.memoId)
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.memo = store.getMemo(to.params.memoId)
    next()
  },
  mounted () {
    this.focusTextarea()
  },
  updated () {
    this.focusTextarea()
  },
  methods: {
    focusTextarea () {
      const textarea = this.$refs.textarea
      textarea.focus()
      textarea.setSelectionRange(0, 0)
    },
    doUpdate () {
      const content = this.$refs.textarea.value
      store.updateMemo(this.memo.id, { content })
    },
    doDestroy () {
      if (confirm('メモを削除してよろしいですか')) {
        store.removeMemo(this.memo.id)
        this.$router.push({ name: 'Memos' })
      }
    }
  }
}
</script>

<style scoped>
.memo,
.memo-view {
  width: 100%;
  height: 100%;
}

.memo-view {
  display: flex;
  flex-direction: column;
}

textarea {
  flex: 1;
  resize: none;
  margin: 10px 10px 0;
  padding: 10px;
  border: 1px solid #c7c8c9;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.5;
}

textarea:focus-visible {
  outline: none;
  border-color: #0080d5;
}

.actions {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
}

button {
  padding: 10px;
  font-size: 1rem;
}

.edit-button {
  flex: 1;
}

.delete-button {
  width: 6rem;
}

.memo-not-found {
  text-align: center;
}
</style>
