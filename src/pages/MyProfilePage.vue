<template>
  <div class="hello" :style="cssProps">
    <div class="title">
      Hello!! My name is Denys )

      <el-button @click="changeBgimg()">
        Нажми
      </el-button>
    </div>
    <div class="block-1" v-for="block in blocks" :key="block.id">
      <div class="img-item">
        <img class="img" :src="require('../assets/photo/' + block.img)" alt="">
      </div>
      <div class="text">
        {{ block.text }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  // components: {
  //   BgImg,
  // }
  props: {
    msg: String
  },
  data() {
    return {
      bgImg: 0,
      photosBg: ['../assets/VCbg.jpg', '../assets/photo/cat-1.jpeg', '../assets/photo/cat-2.jpeg'],
      cssProps: {
        backgroundImage: `url(${require('../assets/VCbg.jpg')})`
      },
      blocks: [
        {
          id: 1,
          img: 'cat-1.jpeg',
          text: 'Я и что-то обо мне',
          styles: {}
        },
        {
          id: 1,
          img: 'cat-2.jpeg',
          text: 'Я и что-то обо мне',
          styles: {}
        },
        {
          id: 1,
          img: 'cat-3.jpeg',
          text: 'Я и что-то обо мне',
          styles: {}
        },
        {
          id: 1,
          img: 'cat-5.jpg',
          text: 'Я и что-то обо мне',
          styles: {}
        },
      ]
    };
  },
  methods: {
    changeBgimg() {
      this.bgImg++
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  font-size: 28px;
  color: #FFFFF0;
  width: 100%;
  height: auto;
  padding: 20px;
}

.block-1 {
  display: flex;
  flex-direction: row;
}

.block-1:nth-child(2n) {
  display: flex;
  flex-direction: row-reverse;
}

.img-item {
  display: flex;
  justify-content: start;
  flex-grow: 1;
  width: 50%;
  padding: 20px 0;
}

.img {
  position: relative;
  width: 75%;
}

.text {
  display: flex;
  justify-content: center;
  margin: auto;
  flex-grow: 1;
  width: 50%;
  padding: 20px 0;
}
</style>
