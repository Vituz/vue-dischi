const app = new Vue({

    el: '#app',

    data:{
        url:'https://flynn.boolean.careers/exercises/api/array/music',
        songsList: [],
    },

    methods:{

    },

    mounted(){

        axios.get(this.url)
        .then(resp =>{
            
            console.log(resp);

            for(var i = 0; i < resp.data.response.length; i++ ){
                this.songsList.push({
                    poster: resp.data.response[i].poster,
                    title: resp.data.response[i].title,
                    author: resp.data.response[i].author,
                    genre: resp.data.response[i].genre,
                    year: resp.data.response[i].year
                });
            }
            console.log(this.songsList);
        })
    }
});