//const jobTitle = document.querySelector('#job-title');
const jobSearch = document.querySelector('#search-button');
const filterBy = document.querySelector('#filter-by');
const tenRecent = document.querySelector('#ten-recent');
const from48Hrs = document.querySelector('#from-48hrs');
const byDate = document.querySelector('#by-date');
const jobPosting = document.querySelector('#job-posting');
const data = `https://api.adzuna.com/v1/api/jobs/gb/search/4?app_id=ea386325&app_key=1c86ea6e0adee0b896a437272620195c%09&what=Software%20Engineer`;

data.forEach

fetch("https://api.adzuna.com/v1/api/jobs/gb/search/4?app_id=ea386325&app_key=1c86ea6e0adee0b896a437272620195c%09&what=Software%20Engineer")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let jobPosting = document.querySelector("#job-posting")


        for (let i = 0; i < 10; i++) {
            let base = data.results[i]
            console.log(base)
            let jobTitle = [base.title]
            console.log(jobTitle)
            //let jobDate= data.results[i].created
            let jobDate = String(data.results[i].created).substring(0, 10)
            let jobDateArray = Array.from(jobDate)
            console.log(jobDate)
            console.log(typeof jobTitle);
            console.log(typeof jobDate);
            console.log(typeof jobDateArray);
            const jobs = document.createElement('div')
            jobs.innerHTML = `<h2 class="text-xl">${jobTitle}</h2> 
                                <p class="mb-4">${jobDate}</p>`
            jobPosting.appendChild(jobs);
            //jobDate.sort(forJobDate());
            //console.log(jobDate)
            //


            //Function that arrange the date chronologically

            function forJobDate(a, b) {
                //by month and then by day
                let date1 = new Date(a.created); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
                let date2 = new Date(b.created);
                console.log(date1.getDate(), date1.getUTCDate(), date1.getMonth(), date1.getUTCMonth());
                if (date1.getUTCMonth() > date2.getUTCMonth()) {
                    return 1;
                } else if (date1.getUTCMonth() < date2.getUTCMonth()) {
                    return -1;
                } else {
                    //same month
                    return date1.getUTCDate() - date2.getUTCDate();
                }

            }


           // console.log(base.sort(forJobDate))



            // tenRecent.addEventListener("click",() => {
            //     jobPosting.classList.toggle('show');
            // })


        }

    })
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







