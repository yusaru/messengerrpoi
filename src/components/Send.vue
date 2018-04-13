<template>
  <div id="send">
    <section class="section">
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" @keyup.ctrl.enter="pushData" v-model="content"></textarea>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <button @click="pushData" class="button is-primary">Post comment</button>
          </div>
          <div class="level-item"></div>
          <small>
            <div>ctrl+enter : Post comment!</div>
          </small>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'send',
  data: function () {
    return {
      account: firebase.auth().currentUser.email,
      content: ''
    }
  },
  created: function () {
    this.account = firebase.auth().currentUser.email
  },
  methods: {
    pushData: function () {
      if (this.content === '') return
      firebase.database().ref('myBoard/').push({
        name: this.account,
        message: this.content,
        timestamp: moment().format('YYYY/MM/DD HH:mm:ss A')
      })
      this.content = ''
    }
  }
}
</script>
