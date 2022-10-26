// dev: Francesco Cimino;
// proj: Vue Slider;
// lang: js;

// init
const {createApp} = Vue;

createApp({
    data() {
        return {

            // creation-array-for-imgs
            imgsArray: [
                {
                    img: 'img/01.jpg',
                    title: 'Pic 1',
                    text: 'This is an example of description for a generic pic... Francesco Cimino classe#73',
                },

                {
                    img: 'img/02.jpg',
                    title: 'Pic 2',
                    text: 'This is an example of description for a generic pic... Francesco Cimino classe#73',
                },

                {
                    img: 'img/03.jpg',
                    title: 'Pic 3',
                    text: 'This is an example of description for a generic pic... Francesco Cimino classe#73',
                },

                {
                    img: 'img/04.jpg',
                    title: 'Pic 4',
                    text: 'This is an example of description for a generic pic... Francesco Cimino classe#73',
                },

                {
                    img: 'img/05.jpg',
                    title: 'Pic 5',
                    text: 'This is an example of description for a generic pic... Francesco Cimino classe#73',
                }

            ],

            // set-variables
            sliderPosition: 0,
            autoScroll: "",
            mouseActions: false,
        }
    }, 

    // autoscroll-section
    created: function() {

        this.autoScroll = setInterval(() => {

            if(this.sliderPosition < this.imgsArray.length - 1) {
                this.sliderPosition++;
                 
            } else {
                this.sliderPosition = 0;
            }

        }, 1500); 
        
    }

}).mount("#root")