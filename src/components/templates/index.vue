<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../molecules/header.vue'
    import Footer from '../molecules/footer.vue'
    export default {
        name: "index.vue",
        components: {
            Header,
            Footer
        }

    }
</script>
