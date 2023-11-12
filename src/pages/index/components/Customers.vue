<template>
  <div class="Customers">
    <div class="Customers_Main">
      <div class="Customers_Title">主要顧客</div>
      <div class="Customers_Main_Items">
        <div
          v-for="items in CustomersData"
          :key="items.id"
          class="Customers_Items"
          :class="
            items.id > 3 ? 'Customers_Items_top_3' : 'Customers_Items_top_1'
          "
        >
          <img
            :src="items.src"
            alt="Customers_Items1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Customers1 from '@/assets/images/index_customers/customers1.svg'
import Customers2 from '@/assets/images/index_customers/customers2.svg'
import Customers3 from '@/assets/images/index_customers/customers3.svg'
import Customers4 from '@/assets/images/index_customers/customers4.svg'
import Customers5 from '@/assets/images/index_customers/customers5.svg'
import Customers6 from '@/assets/images/index_customers/customers6.svg'

interface Customers_Items {
  id: number
  src: string
}

const CustomersData = ref<Customers_Items[]>([
  { id: 1, src: Customers1 },
  { id: 2, src: Customers2 },
  { id: 3, src: Customers3 },
  { id: 4, src: Customers4 },
  { id: 5, src: Customers5 },
  { id: 6, src: Customers6 }
])
</script>

<style scoped>
.Customers {
  width: 100%;
  height: 820px;
  background: linear-gradient(
    0deg,
    #0e1b47 0%,
    rgba(14, 27, 71, 0) 80.01%,
    rgba(14, 27, 71, 0) 100%
  );
  display: flex;
  justify-content: center;
}
.Customers_Main {
  width: 1200px;
  margin-top: 120px;
}
.Customers_Title {
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 54px; /* 150% */
}
.Customers_Main_Items {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.Customers_Items {
  width: 387px;
  height: 120px;
  flex-shrink: 0;
  background: rgba(9, 18, 46, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
}
.Customers_Items_top_1 {
  margin-top: 0px;
}
.Customers_Items_top_3 {
  margin-top: 80px;
}
@media screen and (max-width: 1200px) {
  .Customers_Items {
    flex: 0 0 calc(50% - 10px);
  }
  .Customers_Items_top_3 {
    margin-top: 40px;
  }
  .Customers_Items_top_1 {
    margin-top: 40px;
  }
}

@media screen and (max-width: 480px) {
  .Customers {
    height: auto;
  }
  .Customers_Items {
    flex: 0 0 100%;
  }
  .Customers_Items_top_1 {
    margin-top: 20px;
  }
  .Customers_Items_top_3 {
    margin-top: 20px;
  }
}
</style>
