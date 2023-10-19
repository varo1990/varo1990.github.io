class Utils{
  static getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }
}
export default Utils