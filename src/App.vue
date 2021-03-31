<template>
  <div id="nav">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/course">课程</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/profile">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
