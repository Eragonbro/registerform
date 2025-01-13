// variable declaration

const btnNext1 = document.getElementById("btnNext1");

const btnBack2 = document.getElementById("btnBack2");
const btnNext2 = document.getElementById("btnNext2");

const btnBack3 = document.getElementById("btnBack3");
const btnSubmit = document.getElementById("btnSubmit");

const container = document.getElementById("container");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

// Navigation
container.addEventListener("click",
    (event) => {
        console.log("Clicked target:", event.target);
        if (event.target === btnNext1) {
            step1.classList.toggle("hidden");
            step2.classList.toggle("hidden");
        }

        if (event.target === btnNext2) {
            step2.classList.toggle("hidden");
            step3.classList.toggle("hidden");
        }

        if (event.target === btnBack2) {
            step1.classList.toggle("hidden");
            step2.classList.toggle("hidden");
        }


        if (event.target === btnBack3) {
            step2.classList.toggle("hidden");
            step3.classList.toggle("hidden");
        }
    }
);


// Populate recap

    // if checked append
    const topic = document.getElementById("topicContainer");
    
    let topics = [];
    const sd = document.getElementById("sd");
    const ue = document.getElementById("ue");
    const gd = document.getElementById("gd");

    step2.addEventListener("click", (event) => {
        //topic 1
        if ( sd.checked ) {
            if (topics.includes(sd.dataset.value)) {
                topics = topics.filter(item => item !== sd.dataset.value);

            } else {
                topics.push(sd.dataset.value);                
            };
        };
        
        //topic 2
        if ( ue.checked ) {
            if (topics.includes(ue.dataset.value)) {
                topics = topics.filter(item => item !== ue.dataset.value);

            } else {
                topics.push(ue.dataset.value);                
            };
        };


        // topic 3
        if (gd.checked ) {
            if (topics.includes(gd.dataset.value)) {
                topics = topics.filter(item => item !== gd.dataset.value);

            } else {
                topics.push(gd.dataset.value);                
            };
        };
    })
    


