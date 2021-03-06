import * as types from '../mutation-types';

const state = {
  about: {
    about: [],
    lulumi: [],
    preferences: [],
  },
  extensions: {},
};

const mutations = {
  [types.UPDATE_ABOUT](stateContext, data) {
    stateContext.about.about = data.about;
    stateContext.about.lulumi = data.lulumi;
    stateContext.about.preferences = data.preferences;
    if (data.path) {
      stateContext.about.path = data.path;
    }
  },
  [types.UPDATE_EXTENSIONS](stateContext, data) {
    stateContext.extensions = data;
  },
};

export default {
  state,
  mutations,
};
