let defaultCity = '北京'
try {
  defaultCity = localStorage.city
} catch (e) {}

export default {
  city: defaultCity
}
