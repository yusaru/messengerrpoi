<template>
  <div id="signin">
    <section class="section">
      <div class="container has-text-center">

        <div class="column is-4 is-offset-4">
          <div class="box">
            <form>
              <h1 class="title">Login</h1>

              <div class="field">
                <div class="control">
                  <i class="far fa-envelope"></i>
                  <input type="text" v-model="account" placeholder="Account" class="input" ref="account">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <i class="fas fa-unlock-alt"></i>
                  <input type="password" v-model="password" placeholder="Password" class="input">
                </div>
              </div>

              <div class="field">
                <button @click="signIn" class="button is-primary" :disabled="agree">Login</button>
              </div>

              <div class="field">
                <router-link to="/signup">Sign up now!!</router-link>
              </div>

              <div class="field">
                <label v-if="error" class="has-text-danger"> {{error}} </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      account: '',
      password: '',
      error: null,
      agree: false
    }
  },
  methods: {
    signIn: function () {
      if (this.agree) return

      firebase.auth().signInWithEmailAndPassword(this.account, this.password).then(
        user => {
          this.agree = false
          alert('Success!')
          this.$router.push('/')
          this.error = null
        },
        err => {
          this.error = err.message
        }
      )
    }
  },
  mounted: function () {
    this.$refs.account.focus()
  }
}
</script>
