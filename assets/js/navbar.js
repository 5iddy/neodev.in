export default {
    data() {
        return {
            isNavbarActive: false,
        }
    },
    methods: {
        showMenu() {
            this.isNavbarActive = !this.isNavbarActive
        },
    }
};
