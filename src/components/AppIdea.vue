<template>
  <article class="p-3 mb-4 rounded-lg bg-gray-300 sm:flex sm:items-center">
    <section class="text-center sm:flex-1 sm:text-left">
      <h2 class="text-xl px-1 sm:leading-6 sm:text-2xl">
        {{ idea.name }}
      </h2>
      <small>{{ idea.username }}</small>
    </section>

    <section
      class="pt-3 border-t-2 mt-6 border-black sm:pt-0 sm:pl-3 sm:border-t-0 sm:border-l-2 sm:mt-0 sm:flex sm:items-center"
    >
      <h3 class="text-3x1 font-bold text-center">{{ idea.votes }}</h3>
      <nav class="flex justify-center sm:block">
        <img
          class="w-10 cursor-pointer"
          src="@/assets/img/arrow.svg"
          alt="Vote Up"
        />
        <img
          class="w-10 cursor-pointer transform rotate-180"
          src="@/assets/img/arrow.svg"
          alt="Vote Down"
        />
      </nav>
    </section>
  </article>
</template>

<script>
export default {
  name: "AppIdea",
  props: {
    idea: {
      type: Object,
      required: true
    }
  }
};
</script>
