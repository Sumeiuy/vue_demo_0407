<template>
  <div class="container">
    <ul v-for="item,index in list">
      <li :key="index"
          class="clearfix">
        <p class="left">{{item.title}}</p>

        <img class="right"
             :src="item.picture"
             alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.$http.get('/getMockData')
        .then((res) => {
          this.list = res.data.dataList
          console.log(this.list, '===000')
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: ghostwhite;
  padding: 10px 0;
}
.container li {
  width: 300px;
  margin: 8px auto;
}
</style>
