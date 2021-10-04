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

      <div class="style-text" v-for="input in massInputs" :key="input.id">
<!--        <VCSelect :textValue="fontSizeValue"-->
<!--                  @test="testFunc"-->
<!--                  :options="fontSizes"-->
<!--        >-->

<!--        </VCSelect>-->

        <VCInput
            :textValue="input.modelValue"
            @changeEvent="input.eventReaction"
            :placeholder="input.placeholder"
        />
      </div>
      <el-button type="primary" @click="saveStyles()">Применить стили</el-button>

    </div>

    <div v-for="item in photos" :key="item.id">
      <div :style="'background-color:' + item.bgc " class="item">
        <div class="item-text">
          <div class="item-title" :style="'font-size:' + styles.fontTitleStyle + ';' + 'color:' + styles.colorTitleStyle">
            {{ item.title }}
          </div>

          <div class="item-description" :style="'font-size:' + styles.fontDescriptionStyle + ';' + 'color:' + styles.colorDescriptionStyle">
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
// import VCSelect from '../components/gui/VCSelect.vue'
import VCInput from '../components/gui/VCInput.vue'

export default {
  props: {
    msg: String
  },
  components: {
    VCInput,
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
        value: '14px',
        label: '14px'
      }, {
        value: '18px',
        label: '18px'
      }, {
        value: '22px',
        label: '22px'
      }, {
        value: '26px',
        label: '26px'
      }],

      test: '1',

      inputs: {
        fontTitleStyle: '',
        fontDescriptionStyle: '',
        colorTitleStyle: '',
        colorDescriptionStyle: '',
      },


      styles: {
        fontTitleStyle: '16px',
        fontDescriptionStyle: '12px',
        colorTitleStyle: '',
        colorDescriptionStyle: '',

      },

      massInputs: [
        {
          id: 1,
          modelValue: '',
          eventReaction: this.changeTitle,
          placeholder: "Размер Заголовков у картинок",
        },
        {
          id: 2,
          modelValue: '',
          eventReaction: this.changeDescription,
          placeholder: "Размер Описания у картинок",
        },
        {
          id: 3,
          modelValue: '',
          eventReaction: this.changeTitleColor,
          placeholder: "Цвет Текста Заголовка в формате #XXXXXX",
        },
        {
          id: 4,
          modelValue: '',
          eventReaction: this.changeDescriptionColor,
          placeholder: "Цвет Текста Описания в формате #XXXXXX",
        },
      ]


      // TODO - сделать так, чтобы можно было настраивать с помощью кнопок расположение элементов. В более сложной версии играться с flexbox count
    
    };
  },
  methods: {
    changeTitle(event) {
      this.inputs.fontTitleStyle = event
    },

    changeDescription(event) {
      this.inputs.fontDescriptionStyle = event
    },

    changeTitleColor(event) {
      this.inputs.colorTitleStyle = event
    },

    changeDescriptionColor(event) {
      this.inputs.colorDescriptionStyle = event
    },

    saveStyles() {
      this.styles.fontTitleStyle = this.inputs.fontTitleStyle + 'px'
      this.styles.fontDescriptionStyle = this.inputs.fontDescriptionStyle + 'px'
      this.styles.colorTitleStyle = this.inputs.colorTitleStyle
      this.styles.colorDescriptionStyle = this.inputs.colorDescriptionStyle
    }
  },
  computed: {
    // checkTect() {
    //   console.log('checkTect')
    //   return this.fontSizeValue
    // }
  },


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