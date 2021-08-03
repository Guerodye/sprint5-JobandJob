//const jobTitle = document.querySelector('#job-title');
//const jobSearch = document.querySelector('#search-button');
const filterBy = document.querySelector('#filter-by');
const tenRecent = document.querySelector('#ten-recent');
//const from48Hrs = document.querySelector('#from-48hrs');
//const byDate = document.querySelector('#by-date');
const jobPosting = document.querySelector('#job-posting');
const filterByCategory = document.querySelector('#filter-by-category');
const datePicker = document.querySelector('#date-picker');

datePicker.style.visibility="hidden";
datePicker.addEventListener("change", last48Hours);




console.log(filterByCategory);
const apiUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/5?app_id=ea386325&app_key=%201c86ea6e0adee0b896a437272620195c&results_per_page=40`;
filterBy.addEventListener("change",filterJobs);
filterByCategory.addEventListener("change", byCategory);

tenLastJobs();

function tenLastJobs(){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let jobPosting = document.querySelector("#job-posting")
            let chronologicalData= data.results.sort(forJobDate);

            //let sortedData = data.results.sort(forJobDate);
            jobPosting.innerHTML = '';

            let jobQuantity=10;
            if( chronologicalData.length<10){
                jobQuantity=chronologicalData.length;
            }
            for (let i = 0; i < jobQuantity; i++) {
                //let base = data.results[i]
                //console.log(base)

                let jobTitle = [chronologicalData[i].title]
                //console.log(jobTitle)

                let jobDate = [chronologicalData[i].created.substring(0, 10)];

                //console.log(jobDate);
                //let jobDateArray = Object.values({jobDate});
                //console.log(typeof jobDate)

                const jobs = document.createElement('div')
                jobs.innerHTML = `<h2 class="text-xl">${jobTitle}</h2> 
                                <p class="mb-4">${jobDate}</p>`
                jobPosting.appendChild(jobs);

                //Function that arrange the date chronologically by comparing the months and the dates with the years being the same

            }
        });
}

function last48Hours(){

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            let chronologicalData= data.results.sort(forJobDate);
            let today;
            if(datePicker.style.visibility=='visible'){
                console.log(datePicker.value);
                today = new Date(datePicker.value);
            }
            else {
                today = new Date();
            }


            let now = today.toISOString();
            today.setHours(today.getHours()-48);
            let before=today.toISOString();
            console.log(before);
            console.log(now);

            jobPosting.innerHTML = '';
            for (let job of chronologicalData) {
                let jobDate = job.created;
                if (now < jobDate) {
                    continue;
                }
                else if (jobDate>=before){

                    let jobTitle = job.title;
                    //console.log(jobTitle)

                    //console.log(jobDate);
                    //let jobDateArray = Object.values({jobDate});
                    //console.log(typeof jobDate)

                    const jobs = document.createElement('div')
                    jobs.innerHTML = `<h2 class="text-xl">${jobTitle}</h2> 
                                <p class="mb-4">${jobDate}</p>`
                    jobPosting.appendChild(jobs);
                }
                else{
                    break;
                }
            }
                console.log('48 and ');

        })

}
function byCategory(){
    datePicker.style.visibility="hidden";

    jobPosting.innerHTML = 'Loading...';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            let chronologicalData= data.results.sort(forJobDate);

            // create a new `Date` object

            jobPosting.innerHTML = '';
            for (let job of chronologicalData) {
                if(job.category.label==filterByCategory.value){
                    let jobTitle = job.title;
                    //console.log(jobTitle)
                    let jobDate = job.created;
                    let jobCategory =job.category.label;



                    //console.log(jobDate);
                    //let jobDateArray = Object.values({jobDate});
                    //console.log(typeof jobDate)

                    const jobs = document.createElement('div')
                    jobs.innerHTML = `<h2 class="text-xl">${jobTitle}</h2> 
                                <p>${jobDate}</p>
                                <p class="mb-4">${jobCategory}</p>`
                    jobPosting.appendChild(jobs);

                }
            }

        })

}


function filterJobs(){
    datePicker.style.visibility="hidden";
    console.log(filterBy.value);
    if (filterBy.value=='10'){
        console.log('hello');
        tenLastJobs();
    }
    else if (filterBy.value=='48'){
        datePicker.style.visibility="hidden";

        last48Hours();
    }
    else if (filterBy.value=='date'){
        datePicker.style.visibility='visible';

    }
}


function forJobDate(a, b) {
    let date1 = new Date(a.created);
    let date2 = new Date(b.created);

    if (date1 < date2) {
        return 1;
    } else if (date1 > date2) {
        return -1;
    }
    return 0;
}

    // let date1 = new Date(a.created);
    // let date2 = new Date(b.created);
    //
    // if (date1.getUTCMonth() > date2.getUTCMonth()) {
    //     return 1;
    // } else if (date1.getUTCMonth() < date2.getUTCMonth()) {
    //     return -1;
    // }
    // //if dates have the same month
    // // else {
    //     return 0;
    // }



        // for (let i=0; i<10; i++) {
        //     let base= data.results[i]
        //     console.log(base)
        //     let jobTitle= base.title
        //     console.log(jobTitle)
        //     let date= data.results[i].created
        //     console.log(date)
        //     const jobs=document.createElement('div')
        //     jobs.innerHTML= `<h2 class="text-xl">${jobTitle}</h2>
        //                         <p class="mb-4">${date}</p>`
        //     jobPosting.appendChild(jobs)
        //
        //
        // }
        // let empty=[]
        //
        // for (let i=0; i<10; i++){
        //     let date= String(data.results[i].created).substring(0,10)
        //     console.log(date)
        //     let postingDates= document.querySelector("#posting-dates")
        //     const dates=document.createElement('div')
        //     dates.innerHTML=`<p>${date}`
        //     postingDates.appendChild(dates)

            // empty.push(date)
            // let changeDate= String([empty])
            // let specificDate= changeDate.substring(0,10)
            // let postingDates= document.querySelector("#posting-dates")
            // const dates=document.createElement('div')
            // dates.innerHTML=`<p>dob: ${specificDate}</p>`
            // postingDates.appendChild(dates)


        //}












//date.sort();
//console.log(date)
//  function byDate(a, b) {
//chronologically by year, month, then day
//     return new Date(a.date).valueOf() - new Date(b.date).valueOf(); //timestamps
// }







