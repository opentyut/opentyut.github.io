import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenTYUT',
  description: '开放式太原理工大学计算机学习资源站',
  lang: 'zh-CN',
  base: '/',
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习指南', link: '/guide/' },
      { text: '太理生存手册', link: '/survival/' },
      { text: '外部资源', link: '/resources' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '学习指南',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '大一上学期', link: '/guide/semester-1' },
            { text: '大一下学期', link: '/guide/semester-2' },
            { text: '大二上学期', link: '/guide/semester-3' },
            { text: '大二下学期', link: '/guide/semester-4' },
          ]
        },
        {
          text: '常用工具',
          items: [
            { text: '开发环境配置', link: '/guide/dev-setup' },
            { text: 'Git & GitHub', link: '/guide/git' },
            { text: '推荐书单', link: '/guide/books' },
            { text: '提问的艺术', link: '/guide/how-to-ask' },
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
            { text: '失败的思维方式', link: '/survival/li-zhi/failed-mindset' },
            { text: '反对 PUA', link: '/survival/li-zhi/anti-pua' },
            { text: '悲壮的学习方式', link: '/survival/li-zhi/tragic-learning' },
            { text: '你的身价是多少', link: '/survival/li-zhi/your-value' },
            { text: '正确地浪费剩下的时间', link: '/survival/li-zhi/waste-time' },
            { text: '总有更值得做的事情', link: '/survival/li-zhi/better-things' },
            { text: '认识信息素养', link: '/survival/li-zhi/info-literacy' },
            { text: '做研究的兴趣', link: '/survival/li-zhi/research-interest' },
            { text: '关于工作', link: '/survival/li-zhi/about-work' },
          ]
        },
        {
          text: '访谈集',
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
          text: '生存技巧',
          items: [
            { text: '转专业指南', link: '/survival/tips/transfer-major' },
            { text: '选课原则与选课技巧', link: '/survival/tips/course-selection' },
            { text: '突击备考', link: '/survival/tips/exam-cram' },
            { text: '正确解读成绩算法', link: '/survival/tips/gpa' },
            { text: '旁门左道', link: '/survival/tips/tricks' },
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
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opentyut/opentyut' }
    ],

    search: {
      provider: 'local'
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
