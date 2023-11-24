import { ref } from 'vue'
import { NavLink, MenuItems } from './pages_interface'

const NavLinkArray = ref<NavLink[]>([
  { id: 1, title: 'ホーム', href: '/' },
  { id: 2, title: '企業情報', href: '' },
  { id: 3, title: '事業概要', href: '' },
  { id: 4, title: '採用情報', href: '/adoption-Intelligence' },
  { id: 5, title: 'アクセス', href: '/map' }
])
const menus: MenuItems[][] = [
  [
    {
      id: 1,
      title: '企業理念経営方針',
      href: '/corporate-philosophy-management-policy',
      align: 'left'
    },
    {
      id: 2,
      title: '社長挨拶',
      href: '/message-from-president',
      align: 'center'
    },
    { id: 3, title: '会社概要', href: '/company-profile', align: 'right' }
    // { id: 4, title: 'イベント情報', href: '/event-information', align: 'left' }
  ],
  [
    {
      id: 1,
      title: 'SIサービス事業',
      href: '/si-service-business',
      align: 'left'
    },
    {
      id: 2,
      title: 'データソリューション',
      href: '/data-solution',
      align: 'center'
    },
    {
      id: 3,
      title: 'インフラ事業',
      href: '/infrastructure-business',
      align: 'right'
    },
    // {
    //   id: 4,
    //   title: 'ヘルスケア事業',
    //   href: '/healthcare-business',
    //   align: 'left'
    // },
    {
      id: 5,
      title: '物流事業',
      href: '/logistics-business',
      align: 'left'
    }
  ],
  [
    // {
    //   id: 1,
    //   title: 'MOVIE',
    //   href: '/company-staff-observation',
    //   align: 'left'
    // },
    {
      id: 2,
      title: '新卒採用',
      href: '/graduate-recruitment',
      align: 'left'
    },
    {
      id: 3,
      title: 'キャリア採用',
      href: '/social-recruitment',
      align: 'center'
    },
    {
      id: 4,
      title: '採用の流れ',
      href: '/recruitment-process',
      align: 'right'
    },
    { id: 5, title: 'FAQよくあるご質問', href: '/FAQ', align: 'left' }
    // {
    //   id: 6,
    //   title: 'キャリア採社員インタビュー用',
    //   href: '/map',
    //   align: 'right'
    // }
  ]
]
export { NavLinkArray, menus }
