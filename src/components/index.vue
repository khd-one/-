<template>
   <el-container class="index-container">
  <el-header class="index-header">
  <el-row>
  <el-col :span="4">
      <div class="grid-content bg-purple">
          <img src="../components/assets/App.vue.png" alt="">
      </div>
 </el-col>
  <el-col class="header-center" :span="16">
      <div class="grid-content bg-purple-light">
        电商管理系统  
      </div>
</el-col>
  <el-col :span="4" class="header-right">
      <div class="grid-content bg-purple">
      <el-button type="success" plain @click="lotout">退出</el-button>    
      </div>
      </el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside class="index-aslide" width="200px"></el-aside></el-aside>
    <el-main class="index-main"></el-main>
  </el-container>
</el-container>

</template>
<script>
export default {
  beforeCreate(){
     if(window.sessionStorage.getItem('token',)) {
      //成功不需要管
     }else{
    this.$message.error('滚，没登陆进不来');
      
       this.$router.push('login')
     }
  },
  methods: {
      lotout(){
        
        this.$confirm('确定退出吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         window.sessionStorage.removeItem('token')
         this.$router.push('login')

         
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
      }  
      
  },  
}
</script>
<style>
.index-container{
    height: 100%;
}
.index-header{
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
}
.header-center{
    text-align: center;
    font-size: 30px;
    color: white;
    font-weight:700;
}.index-aslide{

}
.index-main{
    background-color: #e0eef3;
}
.header-right{
    text-align: right;
}
</style>
