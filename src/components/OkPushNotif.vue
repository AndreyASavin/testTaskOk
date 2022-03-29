<template>
    <div class='notiflist'>
        <div class='notif' v-for="message in messages" :key="message.id">
            <div class='text'>{{message.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OkPushNotif",
        props:{
            messages:{
                type: Array
            }
        },
        methods: {
            hideNotif(){
                if(this.messages.length){
                    let inner = this
                    setTimeout(()=>{
                        inner.messages.splice(inner.messages.length-1, 1)
                    }, 5000)
                }
            }
        }
    }
</script>

<style scoped>
    .notiflist{
        position: fixed;
        display: flex;
        flex-direction: column-reverse;
        top: 40px;
        right: 25px;
        z-index: 5;
        margin-top: 5px;
    }
    .notif{
        background: linear-gradient(to left, white, rgb(128, 128, 128));
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
    }
</style>