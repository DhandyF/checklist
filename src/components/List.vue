<template>
  <div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <h3>List</h3>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-button @click="addList">Add List</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.getlist();
  },
  methods : {
    getlist() {
      this.$http({
        url: "/checklist",
        method: "GET",
      })
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        })
    },
    addList() {

    }
  }
}
</script>
