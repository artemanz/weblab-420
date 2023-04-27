import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import combineMedia from 'postcss-combine-media-query'

export default {
  plugins: [
    postcssPresetEnv(),
    autoprefixer(),
    combineMedia()
  ]
}
