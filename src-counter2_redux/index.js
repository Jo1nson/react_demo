import React from 'react'
import ReactDOM from 'react-dom'


import App from './components/app'
import store from './redux/store'

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
//初始化渲染
render();
//订阅监听，自动重绘
store.subscribe(render);
