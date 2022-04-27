export default {
    state: {
        isCollapse:true
    },
    mutations: {
        CollapseMenu(state:any) {
            state.isCollapse = !state.isCollapse
        }
    }
}