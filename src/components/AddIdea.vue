<template>
  <section class="mb-6">
    <form @submit.prevent="addIdea" class="sm:flex">
      <input
        v-model="idea"
        type="text"
        class="w-full p-3 sm:flex-auto"
        required
        placeholder="Add your idea"
      />
      <input
        v-if="user"
        class="w-full p-2 bg-gray-600 text-white sm:flex-1"
        type="submit"
        value="Add an idea"
      />
    </form>
    <p class="user-actions" v-if="!user">
      <span>Please </span>
      <a @click="doLogin" href="#">login</a>
      <span> first</span>
    </p>
    <p class="user-actions" v-else>
      <span>{{ user.displayName }}, </span>
      <a @click="doLogout" href="#"> logout </a>
    </p>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AddIdea",
  emits: ["do-login", "do-logout", "add-idea"],
  props: {
    user: {
      type: [Object, null]
    }
  },
  setup(props, { emit }) {
    const idea = ref(""),
      doLogin = () => emit("do-login"),
      doLogout = () => emit("do-logout"),
      addIdea = () => {
        emit("add-idea", idea);
        idea.value = "";
      };

    return { idea, doLogin, doLogout, addIdea };
  }
};
</script>
