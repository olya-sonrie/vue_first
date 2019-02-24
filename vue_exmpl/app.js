const pic = (name, owner, year, phone, img) => ({name, owner, year, phone, img})
const log = (text, type, date = new Date()) => ({text, type, date})

const pics = [
  pic('Sky', 'Alex', 2017, '+8 458 456 21 51', 'img/Sky.jpeg'),
  pic('Ocean', 'Sam', 2018, '+8 458 345 21 51', 'img/Ocean.jpeg'),
  pic('Wood', 'Dan', 2018, '+8 494 456 21 51', 'img/Wood.jpeg')
]

new Vue({
  el: '#app',
  data: {
    pics: pics,
    pic: pics[0],
    logs: [],
    selectedPicIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
  },
  methods: {
    selectPic(index) {
      this.pic = pics[index]
      this.selectedPicIndex = index
    },
    newOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Success order: ${this.pic.name} - ${this.pic.owner}`, 'ok')
      )
    },
    cancelOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Cancelled order: ${this.pic.name} - ${this.pic.owner}`, 'cnl')
      )
    }
  },
  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filteredPics() {
      return this.pics.filter(pic => {
        return pic.name.indexOf(this.search) > -1 || pic.owner.indexOf(this.search) > -1
      })
    }
  }
})