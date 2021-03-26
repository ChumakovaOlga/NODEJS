const App = {
    data() {
        return {
            name: 'Translator',
            placeholderString: 'text',
            checkedLanguage: '',
            inputValue: '',
            translations: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.translations.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index) {
            this.translations.splice(index, 1)
        }
    },
    computed: {}
}
const app = Vue.createApp(App).mount('#app')
