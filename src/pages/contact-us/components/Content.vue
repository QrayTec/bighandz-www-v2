<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="text-[1rem] leading-[2rem] font-[400]">
      <div>
        <div>以下をご確認頂き「同意する」にチエックをお願いします。</div>
        <div class="mt-[60px]">
          <div>1、事業者の名称 株式会社ビッグハンズ</div>
          <div class="mt-[30px]">2、個人情報の保護管理者</div>
          <div class="ml-[30px]">
            <div class="mt-[10px] flex">
              <div>管理者名： 金子 隆吾</div>
              <div class="ml-[20px]">所属部署：管理部</div>
            </div>
            <div class="mt-[10px]">連絡先: bh-kanribu@bighandz.co.jp</div>
            <div class="mt-[10px]">
              TEL:03-6228-3468(受付時間:午前10時~午後5時)
            </div>
          </div>
          <div class="mt-[30px]">3、個人情報の利用目的</div>
          <div class="ml-[30px]">
            <div class="mt-[10px]">
              ユ一ザ一様サポ一ト及びお問合せ対応と当社サ一ビス向上の為
            </div>
            <div class="mt-[10px]">ご利用履歴管理の為</div>
          </div>
          <div class="mt-[30px]">4、個人情報の取り扱い業務の委託</div>
          <div class="ml-[30px]">
            <div class="mt-[10px]">
              個人情報の取扱業務の全部または一部を外部に業務委託する場合があります。その際、弊社は、個人情報を適切に保護できる管理体制を敷き実行していることを条件として委託先を厳選したうえで、機密保持契約を委託先と締結し、お客様の個人情報を厳密に管理させます。
            </div>
          </div>
          <div class="mt-[30px]">5、個人情報の開示等の請求</div>
          <div class="ml-[30px]">
            <div class="mt-[10px]">
              お客様は、弊社に対してご自身の個人情報の開示等(利用目的の通知、開示、内容の訂正·追加·削除、利用の停止または消去、第三者への提供の停止)に関して、当社問合わせ窓口に申し出ることができます。
            </div>
            <div class="mt-[10px]">
              その際、弊社はお客様ご本人を確認させていただいたうえで、合理的な期間内に対応いたします。
            </div>
            <div class="mt-[10px]">
              なお、個人情報に関する弊社問合わせ先は、次の通りです。株式会社ビッグハンズ個人情報問合せ窓口〒104-0033東京都中央区新川1丁目28番25号
            </div>
            <div class="mt-[10px]">東京ダイヤピルディング3号館206H室</div>
            <div class="mt-[10px]">
              メ一ルアドレス :bh-kanribu@bighandz.co.jp
            </div>
            <div class="mt-[10px]">
              TEL:03-1234-5678(受付時間9:00~18:00※土·日曜日、祝日、年末年始を除く)
            </div>
          </div>
          <div class="mt-[30px]">
            6、個人情報を提供される事の任意性について、ご本人様が当社に個人情報を提供されるかどうかは任意によるものです。
          </div>
          <div class="ml-[30px]">
            <div class="mt-[10px]">
              ただし、必要な項目を頂けない場合、適切な対応が出来ない場合があります。
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[60px]">
        <div class="flex justify-between">
          <div class="mx-[20px] flex flex-col">
            <div class="flex text-[16px]">
              <div>氏名:</div>
              <div class="text-red">*</div>
            </div>
            <div>
              <input
                v-model="name"
                placeholder="例:ビッグハンズ"
                class="mt-[20px] h-[50px] w-[240px] border rounded-[12px]"
                type="text"
              />
            </div>
          </div>
          <div class="mx-[20px] flex flex-col">
            <div class="flex text-[16px]">
              <div>件名:</div>
              <div class="text-red">*</div>
            </div>
            <div>
              <input
                v-model="EmailTitle"
                placeholder="件名"
                class="mt-[20px] h-[50px] w-[240px] border rounded-[12px]"
                type="text"
              />
            </div>
          </div>
          <div class="mx-[20px] flex flex-col">
            <div class="flex text-[16px]">
              <div>メールアドレス:</div>
              <div class="text-red">*</div>
            </div>
            <div>
              <input
                v-model="Email"
                placeholder="例:mail@example.com  "
                class="mt-[20px] h-[50px] w-[240px] border rounded-[12px]"
                type="text"
              />
            </div>
          </div>
          <div class="mx-[20px] flex flex-col">
            <div class="flex text-[1rem]">
              <div>電話番号:</div>
              <div class="text-red">*</div>
            </div>
            <div>
              <input
                v-model="PhoneNumber"
                placeholder="例:090-0000-0000"
                class="mt-[20px] h-[50px] w-[240px] border rounded-[12px]"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="mx-[20px] mt-[40px] flex flex-col">
          <div class="flex text-[16px]">
            <div>メッセージ:</div>
            <div class="text-red">*</div>
          </div>
          <div>
            <textarea
              v-model="Content"
              class="w-full border"
              placeholder="情報を入力してください"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="font-NotoSansJP mt-[20px] w-full px-[20px]">
        <div>
          <input
            id="checkbox"
            v-model="agreed"
            type="checkbox"
          />
          <label
            for="checkbox"
            class="ml-[20px]"
            >同意する
          </label>
          <button
            class="mt-[20px] max-w-[200px] flex items-center px-[30px] py-[20px]"
            :disabled="!agreed"
            :class="{
              'bg-[#597be5]': agreed,
              'bg-gray-300 cursor-not-allowed': !agreed
            }"
            @click="generateMailtoLink"
          >
            <p
              class="font-NotoSansJP leading-none font-[400] not-italic text-[#fff]"
            >
              お問い合わせ
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

const agreed = ref(false)
const name = ref('')
const EmailTitle = ref('')
const Email = ref('')
const PhoneNumber = ref('')
const Content = ref('')
const MainEmail = ref<string>('info@bighandz.co.jp')

const generateMailtoLink = () => {
  if (name.value === '') {
    alert('名前が入力されていません')
    return
  }

  if (Email.value === '') {
    alert('メールアドレスが入力されていません')
    return
  }

  // 添加对电子邮件格式的验证
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!emailRegex.test(Email.value)) {
    alert('メールアドレスの形式が正しくありません')
    return
  }

  if (PhoneNumber.value === '') {
    alert('電話番号が入力されていません')
    return
  }

  if (Content.value === '') {
    alert('お問合わせ内容が入力されていません')
    return
  }
  const subject = encodeURIComponent(EmailTitle.value)
  const body = encodeURIComponent(
    `日        期:${new Date().toLocaleDateString()}\n
    氏         名: ${name.value}\n
    メールアドレス: ${Email.value}\n
    電 話 番 号: ${PhoneNumber.value}\n
    お問合わせ内容: ${Content.value}\n
    -----------------------Copyright © BigHandz Co.Ltd. All Rights Reserved.-----------------------`
  )
  window.location.href = `mailto:${MainEmail.value}?subject=${subject}&body=${body}`
}
</script>
<style lang=""></style>
