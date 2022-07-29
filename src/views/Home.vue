<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="'App Practica con Typescript'" />
    <ul style="text-align: center">
      <li v-for="(user, index) in users" :key="index">
        {{ user.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { getUsers } from "@/services/users";
import { User } from "../services/users";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    let users = ref<User[]>([]);

    onMounted(() => {
      getUsers()
        .then((response) => response.json())
        .then((json: User[]) => {
          console.log(json);
          users.value = json.slice(0, 10);
        })
        .catch((err) => console.log);
    });

    return { users };
  },
});
</script>

<style scoped></style>
