import { defineConfig } from 'vitepress'

function tokenize(text: string, _fieldName?: string): string[] {
  const tokens: string[] = []
  const CJK = /[一-鿿㐀-䶿]/
  const segments = text.split(new RegExp(`(${CJK.source}+)`))
  for (const seg of segments) {
    if (!seg) continue
    if (CJK.test(seg)) {
      for (let i = 0; i < seg.length - 1; i++) {
        tokens.push(seg.substring(i, i + 2))
      }
      for (const ch of seg) {
        tokens.push(ch)
      }
    } else {
      const words = seg.match(/[a-zA-Z0-9]+/g)
      if (words) tokens.push(...words.map(w => w.toLowerCase()))
    }
  }
  return tokens
}

export default defineConfig({
  title: 'OpenTYUT',
  description: '太原理工大学计算机学习资源站，由在校生与毕业学长共同维护。提供全栈开发、后端开发、人工智能等方向学习路线、课程笔记、升学经验、实习就业指南和外部资源聚合，帮TYUTer少走弯路。',
  lang: 'zh-CN',
  base: '/',
  ignoreDeadLinks: true,

  head: [
    // Favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'OpenTYUT' }],
    ['meta', { property: 'og:image', content: 'https://opentyut.github.io/tyut-open-source-community.png' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://opentyut.github.io/tyut-open-source-community.png' }],
    // 站长验证
    ['meta', { name: 'msvalidate.01', content: 'DD58EC466D8ECA5F11ED62FAD4113FD3' }],
    ['meta', { name: 'google-site-verification', content: 'LrBwzL87HM83XZbpxAcNov-otl7I0YDB95alRmC1S1U' }],
    // 51.la 访问统计
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, "LA.init({id:'LCICN2wUJ6UAJI93',ck:'LCICN2wUJ6UAJI93'})"],
  ],

  srcExclude: ['**/README.md', '**/CONTRIBUTING.md', '**/_template.md', '**/docs/**'],

  sitemap: {
    hostname: 'https://opentyut.github.io',
  },

  transformHead({ pageData }) {
    const title = (pageData.frontmatter.title as string) || pageData.title
    const desc = (pageData.frontmatter.description as string) || pageData.description
    const extra: [string, Record<string, string>][] = []
    if (title) {
      extra.push(
        ['meta', { property: 'og:title', content: title }],
        ['meta', { name: 'twitter:title', content: title }],
      )
    }
    if (desc) {
      extra.push(
        ['meta', { property: 'og:description', content: desc }],
        ['meta', { name: 'twitter:description', content: desc }],
      )
    }
    return extra
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习指南', link: '/guide/' },
      { text: '太理生存手册', link: '/survival/' },
      { text: '升学', link: '/admission' },
      { text: '外部资源', link: '/resources' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '全栈开发',
          items: [
            { text: '施工中', link: '/guide/full-stack' },
          ]
        },
        {
          text: '后端开发',
          items: [
            { text: '施工中', link: '/guide/backend' },
          ]
        },
        {
          text: '人工智能',
          items: [
            { text: '施工中', link: '/guide/ai' },
          ]
        }
      ],
      '/resources': [
        {
          text: '外部资源',
          items: [
            { text: '资源聚合', link: '/resources' },
          ]
        },
        {
          text: '常用工具',
          items: [
            { text: '开发环境配置', link: '/resources/dev-setup' },
            { text: 'Git & GitHub', link: '/resources/git' },
            { text: '推荐书单', link: '/resources/books' },
            { text: '推荐视频课程', link: '/resources/video' },
            { text: '提问的艺术', link: '/resources/how-to-ask' },
            { text: '开源应用推荐', link: '/resources/open-source-apps' },
          ]
        }
      ],
      '/survival/': [
        {
          text: '序',
          items: [
            { text: '声明', link: '/survival/xu/sheng-ming' },
            { text: '序', link: '/survival/xu/xu' },
          ]
        },
        {
          text: '立志篇',
          items: [
            { text: '欢迎来到太原理工大学', link: '/survival/li-zhi/welcome' },
            { text: '你想要做什么', link: '/survival/li-zhi/what-to-do' },
            { text: '为什么选择计算机', link: '/survival/li-zhi/why-cs' },
            {
              text: '失败的思维方式',
              collapsed: true,
              items: [
                { text: '概览', link: '/survival/li-zhi/failed-mindset' },
                { text: '被动思维', link: '/survival/li-zhi/passive-mindset' },
                { text: '高考唯一论', link: '/survival/li-zhi/gaokao-only' },
              ]
            },
            { text: '反对 PUA', link: '/survival/li-zhi/anti-pua' },
            { text: '悲壮的学习方式', link: '/survival/li-zhi/tragic-learning' },
            { text: '你的身价是多少', link: '/survival/li-zhi/your-value' },
            {
              text: '请正确安排你的大学时间',
              collapsed: true,
              items: [
                { text: '概览', link: '/survival/li-zhi/waste-time' },
                { text: '就业时间线', link: '/survival/li-zhi/waste-time-employment' },
                { text: '考研时间线', link: '/survival/li-zhi/waste-time-kao-yan' },
                { text: '保研时间线', link: '/survival/li-zhi/waste-time-bao-yan' },
              ]
            },
            { text: '总有更值得做的事情', link: '/survival/li-zhi/better-things' },
            { text: '认识信息素养', link: '/survival/li-zhi/info-literacy' },
            { text: '关于工作', link: '/survival/li-zhi/about-work' },
          ]
        },
        {
          text: '访谈篇',
          items: [
            { text: '为了留学而出国', link: '/survival/interviews/study-abroad' },
            { text: '做真正的研究', link: '/survival/interviews/real-research' },
            { text: '管理者的智慧', link: '/survival/interviews/manager-wisdom' },
            { text: '保研者说', link: '/survival/interviews/bao-yan' },
            { text: '考研', link: '/survival/interviews/kao-yan' },
            { text: '已经工作学长的人生经验', link: '/survival/interviews/working-seniors' },
            { text: '小心项目的陷阱', link: '/survival/interviews/project-traps' },
          ]
        },
        {
          text: '求实篇',
          items: [
            { text: '转专业指南', link: '/survival/tips/transfer-major' },
            { text: '选课原则与选课技巧', link: '/survival/tips/course-selection' },
            { text: '突击备考', link: '/survival/tips/exam-cram' },
            { text: '正确解读成绩算法', link: '/survival/tips/gpa' },
            { text: '志愿时长、pu学分与综测', link: '/survival/tips/student-record' },
            { text: '旁门左道', link: '/survival/tips/tricks' },
          ]
        },
        {
          text: '创新篇',
          items: [
            { text: '做研究的兴趣', link: '/survival/chuangxin/research-interest' },
            { text: '竞赛指南', link: '/survival/chuangxin/competition' },
            { text: '创新创业', link: '/survival/chuangxin/entrepreneurship' },
            { text: '参与业内活动', link: '/survival/chuangxin/参与业内活动' },
            { text: '校外实习创新版', link: '/survival/chuangxin/校外实习创新版' },
            { text: '课程点名创新篇', link: '/survival/chuangxin/课程点名创新篇' },
          ]
        },
        {
          text: '附录',
          items: [
            { text: '各专业介绍', link: '/survival/appendix/majors' },
            { text: '学生社团介绍', link: '/survival/appendix/clubs' },
            { text: '通识课介绍', link: '/survival/appendix/general-courses' },
            { text: '本科毕业之后', link: '/survival/appendix/after-graduation' },
          ]
        }
      ],
      '/admission': [
        {
          text: '保研',
          items: [
            { text: '保研概览', link: '/admission/exemption_of_examinations' },
            { text: '普通保研', link: '/admission/bao-yan/normal' },
            { text: '支教团保研', link: '/admission/bao-yan/teaching-support' },
            { text: '国防科工计划', link: '/admission/bao-yan/defense-science' },
          ]
        },
        {
          text: '考研',
          items: [
            { text: '考研概览', link: '/admission/postgraduate_qualifying_examination' },
            { text: '考研规划', link: '/admission/kao-yan/planning' },
          ]
        },
        {
          text: '留学',
          items: [
            { text: '施工中', link: '/admission/study-abroad' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opentyut/opentyut' }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize
          }
        }
      }
    },

    footer: {
      message: 'Made with ❤️ by TYUT alumni',
      copyright: 'Copyright © 2026 OpenTYUT'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: {
      text: '最后更新'
    }
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
