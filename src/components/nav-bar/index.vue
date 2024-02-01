<template>
  <div class="nav-bar">
    <div class="navs">
      <RouterLink replace to="/">
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt="头像" />
        </div>
      </RouterLink>
      <RouterLink replace to="/home">
        <div class="logo">
          <h2>XKL.</h2>
        </div>
      </RouterLink>

      <div class="titles">
        <routerLink replace to="/home">主页</routerLink>
        <RouterLink replace to="/project">项目</RouterLink>
        <RouterLink replace to="/blog">博客</RouterLink>
        <RouterLink replace to="/life">生活</RouterLink>
        <RouterLink replace to="/resume">简历</RouterLink>
        <RouterLink replace to="/about">关于</RouterLink>
      </div>
    </div>

    <div class="icons">
      <div class="switch" @click="changeTheme">
        <span :class="['iconfont', `icon-${theme}`]"></span>
      </div>

      <ul>
        <li>
          <a href="https://github.com/2782712869" target="_blank">
            <span class="iconfont icon-github"></span>
          </a>
        </li>
        <li>
          <a href="https://juejin.cn/user/2814346129310141" target="_blank">
            <span class="iconfont icon-juejin"></span>
          </a>
        </li>
        <li>
          <a href="https://blog.csdn.net/xkl_123?spm=1010.2135.3001.5343" target="_blank">
            <span class="iconfont icon-csdn"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
enum ModeTheme {
  'light' = 'light-theme',
  'dark' = 'yejianmoshi'
}
const theme = ref<ModeTheme>(ModeTheme.light)
const ThemeClass = {
  [ModeTheme.light]: '',
  [ModeTheme.dark]: 'dark'
}
const changeTheme = () => {
  theme.value = theme.value === ModeTheme.light ? ModeTheme.dark : ModeTheme.light
  document.querySelector('html')!.dataset['theme'] = ThemeClass[theme.value]
}
</script>

<style scoped lang="less">
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 35px;
  box-sizing: border-box;
  justify-content: space-between;
  background: var(--theme-background-color);
  color: var(--theme-color);
  box-shadow: var(--box-bottom-shadow);
  transition: all .35s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .navs {
    display: flex;
    align-items: center;
  }

  .logo {
    h2 {
      font-weight: 500;
      transition: text-shadow .2s ease-in-out;
    }
  }

  .icons {
    display: flex;
    align-items: center;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .titles {
    display: flex;
    justify-content: space-around;
    margin-left: 100px;

    a {
      margin: 0 25px;
      font-size: 18px;
      transition: text-shadow .2s ease-in-out;

      &:hover {
        text-shadow: var(--theme-hover-text-shadow);
      }
    }
  }

  .switch {
    margin: 0 10px;
    cursor: pointer;
    transition: text-shadow .2s ease-in-out;

    &:hover {
      text-shadow: var(--theme-hover-text-shadow);
    }

    .iconfont {
      font-size: 25px;
    }
  }

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;
      cursor: pointer;
      transition: text-shadow .2s ease-in-out;

      &:hover {
        text-shadow: var(--theme-hover-text-shadow);
      }
    }

    .iconfont {
      font-size: 25px;
    }
  }
}
</style>
