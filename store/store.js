import Vue from 'vue'
import Vuex from 'vuex'
import jobList from "/mock/jobs.json";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        jobs: [],
    },
    mutations: {
        setJobs(state, jobs) {
            state.jobs = jobs;
        }
    },
    getters: {
        getJobs: state => state.jobs
    },
    actions: {
        async fetchJobs({ commit }) {
            const { jobs } = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(jobList);
                }, 1000);
            });
            commit('setJobs', jobs);
        }
    }
});
