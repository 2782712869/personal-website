<template>
  <div class="home">
    <Clock />
    <article class="programming">
      <h2>编程哲学</h2>
      <p>I write, erase, rewrite</p>
      <p>Erase again, and then</p>
      <p>A poppy blooms.</p>
    </article>
    <article class="functional">
      <h2>函数式哲学</h2>
      <div class="code">
        <h3>纯函数与副作用</h3>
        <p>
          纯函数如同哲学中的理性思考, 是一种纯粹的抽象。就像数学函数一样, 输入相同, 则输出必然相同。在代码中, 纯函数不依赖外部状态, 不修改传入的参数, 也不引起任何副作用。
          副作用就像是破坏一个函数的纯度, 对函数入参的直接修改, 对外部状态的修改, IO变得不可控, 程序似乎变得混乱, 或许这就是React设计成单向数据流的原因。
        </p>
        <pre>
          <code class="javascript">
            {{ pure }}
          </code>
        </pre>
        <h3>映射和规约</h3>
        <p>
          它们体现了一种处理数据的思想，强调纯粹性、可组合性和对不可变性的尊重。映射可以被视为一种对每个元素的个体关注的体现。
          每个元素都是一个个体, 映射则是对这个个体进行某种转换或操作。规约则可以被理解为对整体的关注, 通过将元素逐步合并为一个值。
        </p>
        <pre>
          <code class="javascript">
            {{ mapping }}
          </code>
        </pre>
        <h3>柯里化与组合</h3>
        <p>
          柯里化强调将函数拆分成更小、更独立的部分。柯里化强调将函数拆分成更小、更独立的部分。
          组合关注整体性，通过将小的、可组合的函数组合成更大的整体, 达到更复杂的功能。也涉及到抽象, 将底层的功能抽象为更高层次的功能单元。
        </p>
      </div>
        <pre>
          <code class="javascript">
            {{ currying }}
            <br>
            {{ compose }}
          </code>
        </pre>
    </article>
    <footer>Designed and Developed by XKL
  Copyright © 2024 XKL</footer>
  </div>
</template>

<script setup lang="ts">
import Clock from "@/components/clock/index.vue";
import hljs from 'highlight.js';
import 'highlight.js/styles/panda-syntax-light.css';
import { onMounted, ref } from "vue";

const pure = ref(`const identity = <T>(value: T) => value`)
const mapping = ref(`const map = <T>(mapping: (...args: [value: T, ...any[]]) => any, values: T[]) => values.map(value => mapping(value))`)
const currying = ref(`const curry = <T extends number>(x: T) => (y: T) => x + y`)
const compose = ref(`const compose = <T>(value: T) => g(f(value))`)
onMounted(() => {
  hljs.highlightAll()
})
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--theme-background-color);
  color: var(--theme-color);
  transition: all 0.35s ease-in-out;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
    font-family: Georgia, serif;
  }

  .programming {
    h2 {
      font-weight: 400;
    }

    p {
      margin: 15px 0;
      font-size: 20px;
      font-style: italic;
      text-align: center;
    }
  }

  .functional {
    h2 {
      font-weight: 400;
    }

    pre {
      code {
        display: flex;
        justify-content: center;
      }
    }

    .code {
      margin: 15px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        text-align: start;
        font-weight: 400;
        font-family: Georgia, serif;
        text-align: center;
      }

      p {
        width: 50%;
        font-family: Georgia, serif;
        font-style: italic;
        font-size: 16px;
        margin: 15px 0;
        line-height: 25px;
        text-indent: 2em;
      }
    }
  }

  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 20px;
    background: var(--theme-color);
    color: var(--theme-background-color);
    box-shadow: var(--box-top-shadow);
    transition: all .35s ease-in-out;
    margin-top: 30px;
    font-size: 12px;
    font-style: italic;
    font-family: Georgia, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    box-sizing: border-box;
  }
}
</style>
