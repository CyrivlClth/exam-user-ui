<template>
  <div>
    <mu-appbar :z-depth="1" style="width:100%;" title="用户登录">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>用户登录
    </mu-appbar>
    <mu-paper :z-depth="1" style="padding:16px;">
      <mu-flex justify-content="around">
        <mu-avatar>
          <img src="../assets/logo.png">
        </mu-avatar>
      </mu-flex>

      <mu-form ref="form" :model="user">
        <mu-form-item label="用户名" help-text="请输入用户名,注意不是姓名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="user.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="user.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button full-width round large color="primary" @click="submit">提交</mu-button>
        </mu-form-item>
        <mu-form-item>
          <mu-button full-width round large @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 2, message: "用户名长度大于2" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        { validate: val => val.length >= 3, message: "密码长度大于3" }
      ],
      user: {
        username: "123",
        password: "123"
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
        if (result) {
          this.$router.push("/");
        }
        // TODO 登录
      });
    },
    clear() {
      this.$refs.form.clear();
      this.user = {
        username: "",
        password: ""
      };
    }
  }
};
</script>

