# Vue + Cordova + TS Template
这个模板没有使用Webpack脚手架，个人不喜欢也不习惯Webpack

## Project setup 项目初始化
```
npm install -g cordova
npm install
```

这里不讲Cordova的环境配置，自行谷歌或度娘

## Platform, Build, Run
electron是桌面应用
```
cordova platform add android --save
cordova platform add ios --save
cordova platform add electron --save

cordova build android
cordova build ios
cordova build electron

cordoca build                   // build all platform

cordova run android
cordova run electron
cordova run ios
```
