<template>
    <div class="wrap">
        <div class="top">
            <header>
                <div class="header__sub">snowboard</div>
                <div class="header__title">ITALY 2020</div>
            </header>
            <div class="content">
                <slot/>
            </div>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        props: {
            content: Node
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap {
        height: 100vh;
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow-y: auto;
        background-image: url("./../assets/ms.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .top {
        flex: 1;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
    }

    header {
        background-image: url("./../assets/ms1.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 200px;
        text-align: center;
        padding: 24px;
        border-bottom: 5px solid #18304B;
    }

    footer {
        background-image: url("./../assets/map.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 200px;
        height: 200px;
    }

    .header__sub {
        font-size: 48px;
        font-weight: 700;
        text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
    }

    .header__title {
        font-size: 56px;
        font-weight: 700;
        color: #A89D75;
        text-shadow: rgba(255, 255, 255, 0.6) 1px 1px 1px, rgba(0, 0, 0, 0.6) -1px -1px 1px;
    }
</style>
