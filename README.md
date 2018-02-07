预览和开发：
npm install
npm run dll
npm run dev 
(dev时在config/index.js中dev.proxyTable配置了代理，请求了线上的接口)
打开localhost:8080

构建：（需要开myhome_back看效果，把config/index.js中dev.proxyTable的代理改成localhost）
npm run build