<template>
  <div class="container mx-auto p-4">
    <div class="w-full bg-gray-100 shadow-lg p-4 rounded-lg">
      <h1 class="mb-5 text-4xl text-center">Hello</h1>
      <AddIdea
        :user="user"
        @do-login="doLogin"
        @do-logout="doLogout"
        @add-idea="addIdea"
      />
      <AppIdea v-for="(idea, $index) of ideas" :key="$index" :idea="idea" />
    </div>
  </div>
</template>

<script>
import AppIdea from "@/components/AppIdea";
import AddIdea from "@/components/AddIdea";
import { ref } from "vue";
import { auth, db, firebase } from "./firebase.js";

export default {
  name: "App",
  setup() {
    const ideas = ref([]);
    let user = ref(null);

    auth.onAuthStateChanged(async auth => (user.value = auth ? auth : null));
    db.collection("ideas").onSnapshot(snapshot => {
      const newIdeas = [];
      snapshot.docs.forEach(doc => {
        let { name, user, userName, votes } = doc.data(),
          id = doc.id;

        newIdeas.push({
          name,
          user,
          userName,
          votes,
          id
        });
        ideas.value = newIdeas;
      });
    });

    const doLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
          await auth.signInWithPopup(provider);
        } catch (error) {
          console.error(error);
        }
      },
      doLogout = async () => {
        try {
          await auth.signOut();
        } catch (error) {
          console.error(console.error());
        }
      },
      addIdea = async data => {
        try {
          await db.collection("ideas").add({
            name: data.value,
            user: user.value.uid,
            userName: user.value.displayName,
            votes: 0
          });
        } catch (error) {
          console.error(error);
        }
      };

    return { ideas, user, doLogin, doLogout, addIdea };
  },
  data() {
    return {
      message: ""
    };
  },
  components: {
    AppIdea,
    AddIdea
  }
};
</script>

<style>
.user-actions {
  @apply mt-2;
  @apply text-center;
}

.user-actions a {
  @apply font-bold;
  @apply underline;
}
</style>
