import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Truyen Tinh Cam Quan Su',
  description: 'Bo truyen ngan ve tinh cam cua cap doi trong thoi hoc quan su',
  themeConfig: {
    nav: [
      { text: 'Trang chu', link: '/' },
      { text: 'Truyen', link: '/story' }
    ],
    sidebar: [
      {
        text: 'Truyen',
        items: [
          { text: 'Tinh yeu trong thoi quan su', link: '/story' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phiroud/vitepress-site' }
    ]
  }
})
