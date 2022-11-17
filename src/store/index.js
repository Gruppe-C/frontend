import {createStore} from 'vuex'
import router from "@/router";
import userService from "@/services/user.service";
import authService from "@/services/auth.service";
import groupService from "@/services/group.service";

export default createStore({
  state() {
    return {
      token: localStorage.getItem('token') || '',
      currentGroupId: localStorage.getItem('currentGroupId') || ''
    }
  },
  mutations: {
    AUTH_SUCCESS(state, {token}) {
      state.token = token
      localStorage.setItem('token', token)
    },
    AUTH_ERROR(state) {
      state.token = null
      localStorage.removeItem('token')
    },
    LOGOUT(state) {
      state.token = null

      localStorage.removeItem('token')
      router.go(0)
    },
    SET_CURRENT_GROUP_ID(state, {id}) {
      state.currentGroupId = id
      localStorage.setItem('currentGroupId', id)
    }
  },
  actions: {
    login({commit}, loginRequest) {
      return new Promise((resolve, reject) => {
        authService.login(loginRequest.username, loginRequest.password)
          .then((response) => {
            const token = response.data.accessToken
            if (token != null && (typeof token === 'string')) {
              commit('AUTH_SUCCESS', {token})
              resolve(response)
            } else {
              commit('AUTH_ERROR')
              reject(response)
            }
          })
          .catch(err => {
            commit('AUTH_ERROR')
            reject(err)
          })
      })
    },
    register({commit}, registerRequest) {
      return new Promise((resolve, reject) => {
        authService.register(registerRequest.username, registerRequest.password)
          .then((response) => {
            const token = response.data.accessToken
            if (token != null && (typeof token === 'string')) {
              commit('AUTH_SUCCESS', {token})
              resolve(response)
            } else {
              commit('AUTH_ERROR')
              reject(response)
            }
          })
          .catch(err => {
            commit('AUTH_ERROR')
            reject(err)
          })
      })
    },
    logout({commit}) {
      commit('LOGOUT')
    },
    updateCurrentGroupId({commit}, id) {
      commit('SET_CURRENT_GROUP_ID', {id})
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token
    },
    async getProfile(state) {
      if (state.token) {
        const decodedToken = JSON.parse(atob(state.token.split('.')[1]))
        const response = await userService.get(decodedToken.sub)
        const user = response.data
        if (user && user.id) {
          return user
        } else {
          localStorage.removeItem('token')
        }
      }
      return {}
    },
    async getCurrentGroup(state) {
      if (state.currentGroupId) {
        const response = await groupService.get(state.currentGroupId)
        const group = response.data
        if (group?.id) {
          return group
        } else {
          localStorage.removeItem('currentGroupId')
        }
      }
      return null
    },
    isSessionExpired(state) {
      if (state.token) {
        const decodedToken = JSON.parse(atob(state.token.split('.')[1]))
        return Date.now() / 1000 - decodedToken.exp >= 0
      }
      return true
    }
  }
})
