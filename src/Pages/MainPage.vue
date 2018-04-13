<template>
  <div id='mainpage'>
    <div class="container">
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column">

          <List></List>
          <Send></Send>

        </div>
        <div class="column is-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Send from '@/components/Send'
import List from '@/components/List'

export default {
  name: 'mainpage',
  components: {
    Send,
    List
  }
}
</script>
