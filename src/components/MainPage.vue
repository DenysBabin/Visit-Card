<template>
  <div>

    <div class="title">
      <h1>{{ msg }}</h1>
    </div>

    <div class="change-styles">
      <div class="style-title">
        Попробуйте настроить страницу самостоятельно !
        Осторожно! Если вы считаете, что стили, которые вы видите - красивые, то лучше не трогайте - ибо у вас похоже странный вкус )
      </div>

      <div class="style-text">
        <VCSelect :textValue="fontSizeValue"
                  @test="testFunc"
                  :options="fontSizes"
        >

        </VCSelect>
        <el-button type="primary" @click="saveStyles()">Применить стили</el-button>
      </div>
    </div>

    <div v-for="item in photos" :key="item.id">
      <div :style="'background-color:' + item.bgc " class="item">
        <div class="item-text">
          <div class="item-title" :style="'font-size:' + fontSizeValue ">
            {{ item.title }}
          </div>

          <div class="item-description">
            {{ item.description }}
          </div>
        </div>

        <div class="img">
          <img :class="item.class" :src="require('../assets/photo/' + item.src)" alt="">
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import VCSelect from '../components/gui/VCSelect.vue'

export default {
  props: {
    msg: String
  },
  components: {
    VCSelect,
  },
  name: "MainPage",
  data() {
    return {
      photos: [
        {
          id: 1,
          title: 'Милый котя',
          description: 'Описание милого коти',
          class: 'small',
          src: 'cat-1.jpeg',
          bgc: '#ffcece',
        },
        {
          id: 2,
          title: 'Милый котя',
          description: 'Описание милого коти',
          class: 'meium',
          src: 'cat-2.jpeg',
          bgc: '#ceffeb',
        },
        {
          id: 3,
          title: 'Милый котя',
          description: 'Описание милого коти',
          class: 'small',
          src: 'cat-3.jpeg',
          bgc: '#ffcece',
        },
        {
          id: 4,
          title: 'Милый котя',
          description: 'Описание милого коти',
          class: 'medium',
          src: 'cat-4.webp',
          bgc: '#ceffeb',
        },
        {
          id: 5,
          title: 'Милый котя',
          description: 'Описание милого коти',
          class: 'large',
          src: 'cat-5.jpg',
          bgc: '#ffcece',
        }
      ],

      fontSizes: [
      {
        value: '10px',
        label: '10px'
      }, {
        value: '12px',
        label: '12px'
      }, {
        value: '14px',
        label: '14px'
      }, {
        value: '16px',
        label: '16px'
      }, {
        value: '18px',
        label: '18px'
      }],
      fontSizeValue: '',
      test: '1'

      // TODO - сделать так, чтобы можно было настраивать с помощью кнопок расположение элементов. В более сложной версии играться с flexbox count
    
    };
  },
  methods: {
    testFunc(event) {
      this.fontSizeValue = event
    },

    saveStyles() {
      console.log(this.fontSizeValue)
    }
  },
  computed: {
    checkTect() {
      console.log('checkTect')
      return this.fontSizeValue
    }
  }
}
</script>

<style scoped>
.small {
  width: 250px;
}

.medium {
  width: 500px;
}

.large {
  width: 100%;
}

.change-styles {
  padding: 20px;
}

.style-title {
  font-size: 24px;
  padding: 10px 50px;
}

</style>