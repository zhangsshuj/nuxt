<template>
  <div>
    <!--<no-ssr>-->
    <!--<el-carousel indicator-position="outside">-->
      <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <!--<h3>{{ item }}</h3>-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    {{counter}}
    {{todos}}
    <el-button @click="add1">add</el-button>
    <el-button @click="remove1">remove</el-button>
      <ul>
        <li v-for="it in list">
          {{it.name}}
        </li>
      </ul>
    <!--</no-ssr>-->
  </div>
</template>
<script>
  import {mapMutations,mapState} from 'vuex'
    export default {
        async asyncData({$http}) {
          const res = await $http.get('/api/yiye/bankList',{})
          return {list: res.data.data}
        },
        async validate ({ params, store }) {
          return true
        },
        fetch({store}) {
          console.log(store.commit('todos/add',1));
          console.log(store)
          // store.todos.commit('SET_STARS',2)
        },
        name: '',
        props: [],
        data() {
            return {
              list: [],
              num:0
            }
        },
        methods: {
          ...mapMutations('todos',
            ['add','remove']
          ),
          ...mapMutations(
            { 'increment': 'increment'}
          ),
          add1() {
//            this.add(3)
            this.increment()
            this.$store.commit('todos/add',this.num++)
          },
          remove1() {
            this.remove(1)
          }
        },
        computed: {
//          todos () {
//            return this.$store.state.todos.list
//          },
//          ...mapState('todos',{
//            todos: state => state.list
//            })
          ...mapState(['todos']),
//          ...mapState(['counter']),
          ...mapState({
            counter: 'counter'
          })
        },
        watch: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        },
    }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
