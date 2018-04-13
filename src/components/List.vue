
<template>
  <div id="list">

    <div class="column is-8" v-for="item in list" :key="item.id" v-bind:class="{ 'is-offset-4': item.isMe }">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{item.nickName}}</strong>
                <small>{{item.name}}</small>
                <small>{{item.timestamp}}</small>
                <br> {{item.message}}
                <br>
                <small>
                  <a v-on:click="DeletePost(item.id)">delete</a>
                </small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'list',
  data: function () {
    return {
      list: [],
      me: firebase.auth().currentUser.email
    }
  },
  created: function () {
    firebase.database().ref('myBoard/').on('value', snapshot => {
      if (snapshot) {
        const rootList = snapshot.val()
        let list = []
        // データオブジェクトを配列に変更する
        Object.keys(rootList).forEach((val, key) => {
          rootList[val].id = val
          rootList[val].isMe = rootList[val].name === this.me
          rootList[val].nickName = rootList[val].name.split('@')[0]

          list.push(rootList[val])
        })
        // vueのdataに突っ込む
        this.list = list
      }
    })
  },
  methods: {
    DeletePost: function (id) {
      firebase.database().ref('myBoard/').child(id).remove()
    }
  }
}
</script>
