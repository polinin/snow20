<template>
    <div class="hello">
        <div>
            <div v-for="item in data" v-bind:key="item.date" class="is-flex is-item">
                <div class="is-item__date">{{item.date}}</div>
                <div class="is-item__data">
                    <div class="is-item__data-title">{{item.title}}</div>
                    <div v-html="item.description"></div>
                </div>
            </div>
            <br/>
        </div>
    </div>
</template>

<script>
    import Data from './../Data';

    export default {
        name: 'Itinerary',
        props: {}, data() {
            return {
                data: Data
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .is-flex {
        display: flex;
    }

    .is-item__date,
    .is-item__data {
        padding: 24px 32px;
    }

    .is-item {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 18px;
        margin: 1px 0;
    }

    .is-item .is-item__data {
        background-color: rgba(255,255,255,.9);
    }

    .is-item__date {
        flex: 2;
        text-transform: uppercase;
        font-size: 32px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #DEE8DD;
        text-align: right;
        font-weight: bold;
        line-height: 1;
    }

    .is-item__data {
        flex: 4;
        color: #4e4e47;
    }

    .is-item__data-title {
        text-transform: uppercase;
        font-weight: 700;
        font-family: sans-serif;
    }
</style>
