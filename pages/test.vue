<template>
    <div>

    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        
        mounted(){
            let claimable = false

            if ( lastClaimed >=14 ){
                claimable = true	
            }else{
                var myCurrentDate = new Date();
                var myFutureDate  = new Date(myCurrentDate);

                claimable = myFutureDate.setDate(myFutureDate.getDate()+ 14)
            }
            console.log(claimable);
        }

    }
</script>

<style lang="scss" scoped>

</style>