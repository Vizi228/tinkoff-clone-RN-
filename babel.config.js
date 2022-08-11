module.exports = function(api) {
  plugins: ["tailwindcss-react-native/babel"]
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
