<template>
  <div class="memo">
    <textarea :value="memo.content" ref="textarea"></textarea>
    <div class="actions">
      <button class="edit-button" @click="doUpdate">編集</button>
      <button class="delete-button" @click="doDestroy">削除</button>
    </div>
  </div>
</template>

<style scoped>
.memo {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
</style>

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
      store.removeMemo(this.memo.id)
      this.$router.push({ name: 'Memos' })
    }
  }
}
</script>
