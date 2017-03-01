<template>
    <li v-if="href">
        <a :href="href">
            <slot></slot>
        </a>
    </li>

    <li class="active" v-else>
        <slot></slot>
    </li>
</template>

<script>
    export default {
        props: {
            href: {
                type: String
            }
        }
    }
</script>