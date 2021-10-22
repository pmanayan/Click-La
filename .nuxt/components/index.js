export const Background = () => import('../..\\components\\Background.vue' /* webpackChunkName: "components/background" */).then(c => wrapFunctional(c.default || c))
export const CreateAccount = () => import('../..\\components\\CreateAccount.vue' /* webpackChunkName: "components/create-account" */).then(c => wrapFunctional(c.default || c))
export const Creatives = () => import('../..\\components\\Creatives.vue' /* webpackChunkName: "components/creatives" */).then(c => wrapFunctional(c.default || c))
export const Dashboard = () => import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c))
export const DashboardTraining = () => import('../..\\components\\DashboardTraining.vue' /* webpackChunkName: "components/dashboard-training" */).then(c => wrapFunctional(c.default || c))
export const Event = () => import('../..\\components\\Event.vue' /* webpackChunkName: "components/event" */).then(c => wrapFunctional(c.default || c))
export const Events = () => import('../..\\components\\Events.vue' /* webpackChunkName: "components/events" */).then(c => wrapFunctional(c.default || c))
export const FileUpload = () => import('../..\\components\\FileUpload.vue' /* webpackChunkName: "components/file-upload" */).then(c => wrapFunctional(c.default || c))
export const Forum = () => import('../..\\components\\Forum.vue' /* webpackChunkName: "components/forum" */).then(c => wrapFunctional(c.default || c))
export const ForumStatistics = () => import('../..\\components\\ForumStatistics.vue' /* webpackChunkName: "components/forum-statistics" */).then(c => wrapFunctional(c.default || c))
export const LeftNavigation = () => import('../..\\components\\LeftNavigation.vue' /* webpackChunkName: "components/left-navigation" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Logout = () => import('../..\\components\\Logout.vue' /* webpackChunkName: "components/logout" */).then(c => wrapFunctional(c.default || c))
export const MosaicGrid = () => import('../..\\components\\MosaicGrid.vue' /* webpackChunkName: "components/mosaic-grid" */).then(c => wrapFunctional(c.default || c))
export const MosaicTemplate = () => import('../..\\components\\MosaicTemplate.vue' /* webpackChunkName: "components/mosaic-template" */).then(c => wrapFunctional(c.default || c))
export const MyAccount = () => import('../..\\components\\MyAccount.vue' /* webpackChunkName: "components/my-account" */).then(c => wrapFunctional(c.default || c))
export const MyAccountProfile = () => import('../..\\components\\MyAccountProfile.vue' /* webpackChunkName: "components/my-account-profile" */).then(c => wrapFunctional(c.default || c))
export const MyAccountSettings = () => import('../..\\components\\MyAccountSettings.vue' /* webpackChunkName: "components/my-account-settings" */).then(c => wrapFunctional(c.default || c))
export const MyAccountSocialIcons = () => import('../..\\components\\MyAccountSocialIcons.vue' /* webpackChunkName: "components/my-account-social-icons" */).then(c => wrapFunctional(c.default || c))
export const NavigationLinks = () => import('../..\\components\\NavigationLinks.vue' /* webpackChunkName: "components/navigation-links" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../..\\components\\News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const NewsCategory = () => import('../..\\components\\NewsCategory.vue' /* webpackChunkName: "components/news-category" */).then(c => wrapFunctional(c.default || c))
export const NewsSingle = () => import('../..\\components\\NewsSingle.vue' /* webpackChunkName: "components/news-single" */).then(c => wrapFunctional(c.default || c))
export const TopAccountProfile = () => import('../..\\components\\TopAccountProfile.vue' /* webpackChunkName: "components/top-account-profile" */).then(c => wrapFunctional(c.default || c))
export const TopNavigation = () => import('../..\\components\\TopNavigation.vue' /* webpackChunkName: "components/top-navigation" */).then(c => wrapFunctional(c.default || c))
export const Trainings = () => import('../..\\components\\Trainings.vue' /* webpackChunkName: "components/trainings" */).then(c => wrapFunctional(c.default || c))
export const Videos = () => import('../..\\components\\Videos.vue' /* webpackChunkName: "components/videos" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
