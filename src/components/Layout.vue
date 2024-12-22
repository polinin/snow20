<template>
  <div class="wrap" v-bind:class="{ img_safari: isSafari }">
    <div class="top">
      <div class="bg-image" ref="bg"></div>
      <header ref="header">
        <div class="header__sub" ref="subtitle">snowboard</div>
        <div class="header__title" ref="title">ITALY 2020</div>
      </header>
      <div class="content" v-scroll="handleScroll">
        <slot />
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import browser from './../utils/browser';

export default {
  name: 'LayoutMain',
  props: {
    content: Node,
  },
  data() {
    return {
      isSafari: browser.isSafari(),
    };
  },
  methods: {
    handleScroll() {
      const { header, bg, subtitle, title } = this.$refs;

      if (!header || !bg) return;

      if (window.scrollY > 15) {
        header.style.height = '0';
        header.style.padding = '0';
        header.style.filter = 'brightness(0.3)';
        bg.style.filter = 'blur(3px) brightness(0.3)';
        subtitle.style.fontSize = '0';
        title.style.fontSize = '0';
      } else {
        header.style.height = '200px';
        header.style.padding = '24px';
        header.style.filter = 'none';
        bg.style.filter = 'blur(3px)';
        subtitle.style.fontSize = '48px';
        title.style.fontSize = '56px';
      }
    },
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f);
          }
        };
        window.addEventListener('scroll', f);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.bg-image {
  z-index: -1;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  transition: filter 0.2s ease-in-out;
}

.wrap:not(.img_safari) .bg-image {
  background-image: url('./../assets/ms.webp');
}

.img_safari .bg-image {
  background-image: url('./../assets/ms.jpg');
}

.top {
  flex: 1;
  position: relative;
  padding-top: 253px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
  text-align: center;
  padding: 24px;
  border-bottom: 5px solid #18304b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out;
  z-index: -1;
}

.wrap:not(.img_safari) header {
  background-image: url('./../assets/ms1.webp');
}

footer {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;
  height: 200px;
  filter: saturate(0.5);
  border-top: 5px solid #606060;
}

.wrap:not(.img_safari) footer {
  background-image: url('./../assets/map.webp');
}

.img_safari header {
  background-image: url('./../assets/ms1.jpg');
}

.img_safari footer {
  background-image: url('./../assets/map.jpg');
}

.header__sub {
  font-size: 48px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px,
    rgba(0, 0, 0, 0.6) -1px -1px 1px;
  transition: font-size 0.2s ease-in-out;
}

.header__title {
  font-size: 56px;
  font-weight: 700;
  color: #a89d75;
  text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px,
    rgba(0, 0, 0, 0.6) -1px -1px 1px;
  transition: font-size 0.2s ease-in-out;
}

@media all and (max-width: 567px) {
  header {
    height: 100px !important;
    padding: 24px !important;
  }

  .top {
    padding-top: 153px;
  }

  .header__sub {
    font-size: 32px !important;
  }

  .header__title {
    font-size: 42px !important;
  }
}
</style>
