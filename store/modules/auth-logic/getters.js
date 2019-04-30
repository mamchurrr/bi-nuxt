export default {
  user: state => state.user,
  isAuthentificate: state => state.idToken !== null
}
