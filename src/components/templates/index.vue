<template>
    <div>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../header.vue'
    import Home from '../home.vue'
    import Footer from '../footer.vue'
    export default {
        name: "index.vue",
        components: {
            Header,
            Home,
            Footer
        }

    }
</script>

<style scoped>

</style>
