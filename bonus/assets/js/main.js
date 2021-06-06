const app = new Vue({

    el: '#app',

    data:{
        url:'https://flynn.boolean.careers/exercises/api/array/music',
        songsList: [],
        selectedGenre: "All",
        dSongsList: [],
        counter: 0,
    },

    methods:{
        selectSong(){
           
            this.dSongsList=[];

            this.songsList.forEach((element, index) => {

                if(this.songsList[index].genre === this.selectedGenre){

                this.dSongsList.push({
                    poster: this.songsList[index].poster,
                    title: this.songsList[index].title,
                    author: this.songsList[index].author,
                    genre: this.songsList[index].genre,
                    year: this.songsList[index].year
                });
                    
                } else if (this.selectedGenre === 'All'){
                            return this.dSongsList = this.songsList;
                        }
            });

        }
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

            this.dSongsList = this.songsList;
            console.log(this.songsList);

        }).catch(e => {
            console.error(e);
        });
    }
});