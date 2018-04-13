<template>
  <div id='haederComponents'>
    <div class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">ちゃっとっぽいなにか</h1>
          <h2 class="subtitle">Framework is Vue. CSS is Buluma </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <p class="is-hidden-mobile subtitle is-3">{{loginUserName}}</p>
        </div>
        <div class="level-right">
          <button @click="Logout" class="button is-primary" v-if="isLogin">Log out</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'haederComponents',
  data: function () {
    return {
      isLogin: false,
      loginUserName: ''
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isLogin = true
        this.loginUserName = 'Email: ' + user.email
      } else {
        this.isLogin = false
        this.loginUserName = ''
      }
    })
  },
  methods: {
    Logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>
