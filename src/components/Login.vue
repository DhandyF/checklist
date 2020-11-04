<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" offset="4">
        <vs-card>
          <template #title>
            <h3>CHECKLIST</h3>
          </template>
          <template #text>
            <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" offset="2">
                <vs-input v-model="username" placeholder="Username" />
                <vs-input v-model="pass" type="password" placeholder="Password" />
                <vs-row>
                  <vs-button @click="login">Login</vs-button>
                  <vs-button @click="register">Register</vs-button>
                </vs-row>
              </vs-col>
            </vs-row>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      username: '',
      pass: '',
    }
  },
  methods : {
    login() {
      let username = this.username
      let password = this.pass
      this.$store.dispatch('login', {
        username,
        password
      })
        .then(() => {
          this.$router.push('/list');
        })
        .catch(err => {
          console.log(err);
        })
    },
    register() {
      this.$router.push('/register')
    }
  }
}
</script>
