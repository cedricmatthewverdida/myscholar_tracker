export const strict = false
import _ from 'lodash';
import moment from 'moment';
export const state = () => ({
    scholar:[],
    info:[]
})

export const getters ={

    check_wallet_exist: (state) => (id) => {
        return _.find(state.scholar, function(o) { return o.wallet == id; })
    },
}


export const mutations = {

    resetState (state) {
        // Merge rather than replace so we don't lose observers
        // https://github.com/vuejs/vuex/issues/1118
        state.info = []
        state.scholar = []
    },

    import_csv_to_json(state,scholar){
        state.scholar = scholar
    },
  
    addScholar(state,scholar = Object){
        state.scholar.push({
            wallet: scholar[0],
            name: scholar[1],
            percent: scholar[2]
        })
    },


    addInfo(state,info = Object){
        
        
        const milliseconds = info[0].last_claimed_item_at * 1000


        const diff = convert_unix_readable_date(milliseconds)
        

        let claimable = ''

        if ( diff >=14 ){
                claimable = 'Now'	
        }else{
            var myCurrentDate = new Date();
            var myFutureDate  = new Date(myCurrentDate);

            claimable = moment(myFutureDate.setDate(myFutureDate.getDate()+ 14 - diff )).startOf('hour').fromNow()
        }

        const calculate = info[0].total/diff
        info[0].last_claimed_item_at = moment.unix(info[0].last_claimed_item_at).startOf('hour').fromNow()
        info[0].total = info[0].total + " SLP";
        info[0]["average"] = calculate.toFixed(0) + " SLP";
        
        info[0]["claimbleon"] = claimable
        // info[0]["share"] = (parseFloat(info[1]) / 100) * info[0].total
        let compute_share = (info[1] / 100) * parseInt(info[0].total)
        let manager_share = ((100 - info[1]) / 100) * parseInt(info[0].total)
        info[0]["share"] = compute_share.toFixed(2)
        info[0]["sharepercent"] = info[1] + "%"
        info[0]["managershare"] = manager_share.toFixed(2)
        state.info.push(
            info[0]
        )
    },

    merge_and_manipulate (state){
        _.merge(state.info, state.scholar);
    },
    

    



}

export const actions = {




    nuxtClientInit ({ commit }, { req }) {
     
        

    }

}



function convert_unix_readable_date(milliseconds) {
    const dateObject = new Date(milliseconds)
    const today = new Date();
    const day1 = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
    const day2 = dateObject.getFullYear() + "-" + dateObject.getMonth() + "-" + dateObject.getDate()

    const start = moment(day2);
    const end = moment(day1);
        
    const diff = end.diff(start, "days") + 1

    return diff
}