let config = {
  particion: null,
};

const getConfig = () => config;

const setConfig = (newConfig) => {
  config = { ...config, ...newConfig };
};

export default { getConfig, setConfig };
