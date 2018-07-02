var dest = './css';
var src = './styles';

module.exports = {
  sass: {
    src: src + '/**/*.{sass,scss}',
    dest: dest,
    settings: {
      indentedSyntax: true,
    }
  },
  fonts: {
    src: src + '/fonts/*',
    dest: dest + '/fonts/',
  }
};
