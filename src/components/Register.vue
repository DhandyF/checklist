<template>
  <div class="h-screen flex w-full">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6" offset="4">
        <vs-card>
          <template #title>
            <h3>CHECKLIST</h3>
          </template>
          <template #text>
            <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" offset="2">
                <vs-input v-model="email" placeholder="Email" />
                <vs-input v-model="username" placeholder="Username" />
                <vs-input v-model="pass" type="password" placeholder="Password" />
                <vs-row>
                  <vs-button @click="tologin">Back</vs-button>
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
      email: '',
      username: '',
      pass: '',
    }
  },
  methods : {
    tologin(){
      this.$router.push('/')
    },
    register() {
      this.$http({
        url: "register",
        method: "POST",
        data: {
          email: this.email,
          username: this.username,
          password: this.pass
        }
      })
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>
