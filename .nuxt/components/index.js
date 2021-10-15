export { default as Background } from '../..\\components\\Background.vue'
export { default as Creatives } from '../..\\components\\Creatives.vue'
export { default as Dashboard } from '../..\\components\\Dashboard.vue'
export { default as DashboardTraining } from '../..\\components\\DashboardTraining.vue'
export { default as Event } from '../..\\components\\Event.vue'
export { default as Events } from '../..\\components\\Events.vue'
export { default as FileUpload } from '../..\\components\\FileUpload.vue'
export { default as Forum } from '../..\\components\\Forum.vue'
export { default as ForumStatistics } from '../..\\components\\ForumStatistics.vue'
export { default as LeftNavigation } from '../..\\components\\LeftNavigation.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MosaicGrid } from '../..\\components\\MosaicGrid.vue'
export { default as MosaicTemplate } from '../..\\components\\MosaicTemplate.vue'
export { default as MyAccount } from '../..\\components\\MyAccount.vue'
export { default as MyAccountProfile } from '../..\\components\\MyAccountProfile.vue'
export { default as MyAccountSettings } from '../..\\components\\MyAccountSettings.vue'
export { default as MyAccountSocialIcons } from '../..\\components\\MyAccountSocialIcons.vue'
export { default as NavigationLinks } from '../..\\components\\NavigationLinks.vue'
export { default as News } from '../..\\components\\News.vue'
export { default as NewsCategory } from '../..\\components\\NewsCategory.vue'
export { default as NewsSingle } from '../..\\components\\NewsSingle.vue'
export { default as TopAccountProfile } from '../..\\components\\TopAccountProfile.vue'
export { default as TopNavigation } from '../..\\components\\TopNavigation.vue'
export { default as Trainings } from '../..\\components\\Trainings.vue'
export { default as Videos } from '../..\\components\\Videos.vue'

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
