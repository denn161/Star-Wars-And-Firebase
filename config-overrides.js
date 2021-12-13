
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
      '@components': 'src/components',
       '@routes': 'src/routes',
       '@ui': 'src/components/Ui',      
        '@constants' : 'src/constants',
        '@containers': 'src/containers',
        '@hoc': 'src/hoc',
        '@services': 'src/services',
        '@utils'  : 'src/utils',
        '@styles' : 'src/styles',
        '@routes' : 'src/routes',
        '@static' : 'src/static',
        '@hooks'  : 'src/hooks',
        '@static' : 'src/static',
       '@store': 'src/store',
       '@context'  : 'src/context',       

    })(config);
  return config;
}