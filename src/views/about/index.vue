<template>
  <div class="about">
    <div class="content">
      <h3>XKL.</h3>
      <h4>Q: 为什么选择前端?</h4>
      <p>A: 因为上网冲浪的时候了解到前端网站、应用, 就想研究是怎么实现的...当然我也没有只在学习前端, 对于后端, 我也在学习node以及它的生态koa和express.</p>
      <h4>Q: 那为什么选择react?</h4>
      <p>A: 个人没有固定的喜爱偏好, vue和react都是不错的前端框架, vue基于响应式, 符合MVVM架构, react基于状态, 符合UI = f(state), 选择react, 只是因为它有贯彻函数式的思想...,
        因为它真的很酷.</p>
      <h4>Q: 那你又为什么选择函数式?</h4>
      <p>A: 好吧. 最开始我真的只是觉得函数式很酷, 所以才慢慢研究起来了函数式, 像纯函数, 组合, 函子等理念, 因为函数式的代码写起来赶紧很简洁直观, 如果你掌握了它的话.</p>
      <h4>Q: 最后的问题, 你喜欢编程吗?</h4>
      <p>A: 我想我喜欢的不应该是编程这件事情, 因为现在它是我吃饭的工具, 我想我是喜欢做一些有趣的事情, 人终归会是去做一些事的, 那为什么不去做一些有趣的事情呢, 比如去探索一些美好的事物.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.about {
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  background: var(--theme-background-color);
  color: var(--theme-color);
  transition: all 0.35s ease-in-out;
  font-family: Georgia, serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 80%;
    margin-top: 20px;
  }

  h3,
  h4 {
    font-weight: 400;
    margin: 15px 0;
    font-size: 18px;
  }

  p {
    width: 50%;
    line-height: 25px;
    font-size: 16px;
    font-style: italic;
  }
}
</style>
