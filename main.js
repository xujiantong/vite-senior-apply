import './style.css'

export function render () {
  document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
}

render()

// 集成 HMR
// vite build 时 import.meta.hot 是不存在的, 所以加开发环境的判断条件
// 常规范式: 在开发环境中设置 HRM 热更新
if (import.meta.hot) { 
   // 接收热更新 
   // newModule 对应的当前文件
   import.meta.hot.accept((newModule) => {
    newModule.render();
   })
}
