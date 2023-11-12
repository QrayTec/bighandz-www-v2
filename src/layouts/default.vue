<template>
  <div class="relative w-full bg-cover bg-center-center">
    <TheHeader
      class="fixed left-[0px] top-[0px] z-9 w-full"
      :checked="0"
    />
    <main>
      <RouterView />
      <the-back-top />

      <TheFooter />
    </main>
  </div>
</template>
