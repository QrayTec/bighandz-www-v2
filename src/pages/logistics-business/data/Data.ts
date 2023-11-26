import { ref } from 'vue'
import { GartnerCardDataType } from '../types/index'

import Iamge1 from '@/assets/images/logistics-business/image1.png'
import Iamge2 from '@/assets/images/logistics-business/image2.png'
import Iamge3 from '@/assets/images/logistics-business/image3.png'
import Iamge4 from '@/assets/images/logistics-business/image4.png'
import Iamge5 from '@/assets/images/logistics-business/image5.png'
import Iamge6 from '@/assets/images/logistics-business/image6.png'
import Iamge7 from '@/assets/images/logistics-business/image7.png'
import Iamge8 from '@/assets/images/logistics-business/image8.png'
import Iamge9 from '@/assets/images/logistics-business/image9.png'
import Iamge10 from '@/assets/images/logistics-business/image10.png'
import Iamge11 from '@/assets/images/logistics-business/image11.png'

export const CombinedCardData = ref<GartnerCardDataType[]>([
  {
    type: 'CardData1',
    data: [
      {
        BackgroundImage: Iamge1,
        className: 'w-[250px] translate-x-[-125px]',
        title_1: '無人',
        title_2: 'フォ—クリフト'
      }
    ]
  },
  {
    type: 'CardData2',
    data: [
      {
        BackgroundImage: Iamge2,
        className: 'w-[250px]',
        title_1: 'パレット',
        title_2: '倉庫'
      },
      {
        BackgroundImage: Iamge3,
        className: 'w-[125px]',
        title_1: '自動倉庫',
        title_2: ''
      },
      {
        BackgroundImage: Iamge4,
        className: 'w-[125px]',
        title_1: 'AGV',
        title_2: '搬送ロボット'
      }
    ]
  },
  {
    type: 'CardData3',
    data: [
      {
        BackgroundImage: Iamge5,
        className: 'w-[250px]',
        title_1: 'AI',
        title_2: 'フォ—クリフト'
      },
      {
        BackgroundImage: Iamge6,
        className: 'w-[250px]',
        title_1: '移動ラックピッ',
        title_2: 'キング'
      },
      {
        BackgroundImage: Iamge7,
        className: 'w-[125px]',
        title_1: 'ロボットアーム',
        title_2: 'とAGVの連携'
      }
    ]
  },
  {
    type: 'CardData4',
    data: [
      {
        BackgroundImage: Iamge8,
        className: 'w-[250px]',
        title_1: 'スキャンニング、品質検査など',
        title_2: ''
      },
      {
        BackgroundImage: Iamge9,
        className: 'w-[125px]',
        title_1: 'コンペア、AGVとの連携作業',
        title_2: ''
      },
      {
        BackgroundImage: Iamge10,
        className: 'w-[125px]',
        title_1: '自動入庫',
        title_2: ''
      },
      {
        BackgroundImage: Iamge11,
        className: 'w-[250px]',
        title_1: 'コンベア制御',
        title_2: ''
      }
    ]
  }
])
