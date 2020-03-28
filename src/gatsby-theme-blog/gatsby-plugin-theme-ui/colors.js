import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// const darkBlue = `#007acc`
// const lightBlue = `#66E0FF`
// const blueGray = `#282c35`

const white = "#EEEEEE"
const black = "#585858"
export default merge(defaultThemeColors, {
  text: black,
  primary: black,
  heading: black,
  background: white,
  modes: {
    dark: {
      heading: white,
      primary: white,

      background: black,
    },
  },
})
