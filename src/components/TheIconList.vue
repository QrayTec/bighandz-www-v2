<template>
  <div>
    <li class="w-full flex items-center">
      <div class="text-deep_blue ml-[10px] flex font-[400]">
        <div
          class="mt-[calc(16px-0.8rem)] h-full min-w-[16px] flex items-center"
        >
          <img
            class="h-16px w-[16px]"
            src="@/assets/images/company_profile/rhombic.svg"
            alt=""
          />
        </div>
        <p class="ml-[10px]">
          <slot></slot>
        </p>
      </div>
    </li>
  </div>
</template>
