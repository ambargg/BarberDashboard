This app was generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team:

```sh
rails new \
  --database postgresql \
  --webpack \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/minimal.rb \
  CHANGE_THIS_TO_YOUR_RAILS_APP_NAME
```

*If you run into any problems, make sure your Node version is 15 or older. Similarly, make sure your Webpacker version is older than 5 (v4 ideally).*

## To run locally:
`$ git clone git@github.com:ambargg/BarberDashboard.git` <br>
`$ cd BarberDashboard` <br>
`$ bundle install` <br>
`$ yarn install` and go to `localhost:3000` locally <br>

**Please only view in Mobile M-375px or iPhone 6/7/8 version screen width. It is responsive but has not been designed properly for larger screen devices.**

---
# App Objective
To create a dashboard for a barber working in a barber shop (not the owner). 
*User story: As a barber I can have an overview of my day/week in one page.*
This app was designed from UI concept to UX navigation to Frontend implementation.

- A clean design fitting the nearcut.com brand
- A structured and effective HTML/CSS/JS code implementation
- It only supports the mobile version (Iphone 6/7/8 - width of 375px)

The page includes the following elements:
- Information about upcoming appointments: *Time of appt*,  *Name of person booking appt*,  *Service required*, *If they've paid online or will pay in person ('unpaid')*
- When **Today** appointments are open, you can click on the **Next** button on the top right of the dashboard to trigger an animation update to show the next appointment. This is done manually with the button but would be representing an automated feature as the appointments throughout the day go by. 
- How much money the barber has earned today so far and the expected total for the
day, shown in the **Revenue** graph card.
- A link to today’s calendar is shown here via calendar icons (top right in navbar) and the 'day/week' radio buttons as well as the navbar day/week calendar

Extra features I have included:
- Total amount of tips earned, shown again in the **Revenue** graph page
- Schedule for the week, what are the working hours of the barbers. Shown in the **Week** timetable at the bottom of the dashboard
- Link to the next available appointment (next free slot for the barber): This is represented both in the **Today** schedule that shows appointment information as well as *free hours* and also appears in the **Next Appointments** section that shows both *break* hours as well as *appointment* hours
- The summary of how busy the barber’s week looks can also be seen in the **Week** timetable as they can quickly see, at a glance, hours and days that are blocked/busy.
- The next break time is merged into the **Next Appointments** tab as *break* hours are also shown.

**Keep in mind that this is only a static page with dummy data**

---
# UI/UX Design
Starting with our User Story of being a barber wanting to have an overview of their day/week in one page, this 'Dashboard' page was designed so that all of the relevant information could fit in a small mobile screen. This would mean that the user would only need to scroll down and other links/buttons would take them to other pages. Due to time constraints, and keeping the user on one page only, the 'weekly' overview was not designed even though it is inferred by the radio button on the top left (beneath the navbar) that there are additional overviews for the full week (or even month).

### Figma Design
In keeping with the brand style and personality, this was the first design iteration for the 'day/week' dashboard. All of the features (mentioned above) had to be added clearly without being too confusing or crowded. I opted for collapsable contents that could close into thin cards/tabs when not needed (and for future extra features on the page).

*First iteration:*


![figma 1](https://user-images.githubusercontent.com/52960001/105095390-e00d3e00-5aa5-11eb-8c23-14df4b53386f.png)
The second iteration was a bit cleaner and more in line with the design style of nearcut.com. Due to the time limit I was not able to design more features or more figma iterations.



*Second iteration:*


![figma 2](https://user-images.githubusercontent.com/52960001/105098457-63c92980-5aaa-11eb-80a5-192c3618427e.png)

---

# Implementing HTML/CSS/JS

All of the **html** for the dashboard page is in the `home.html.erb` views. It is organised into sections, starting from the top to the bottom: *fixed navbar, calendar navbar, upper dashboard content (buttons), Today schedule info & times, Next Appointment hours, Revenue graph and progress bar, Weekly summary.*

**Roboto font was used throughout, as it is the main font in** nearcut.com

The **css** has some main styles in `home.scss` but it is mostly split into 6 component pages, depending on the section: *button, collapsable, graph, navbar, schedule, timetable.*

**As well as all of the styling for the page, there is some css animation that, when triggered by the event listener, the *next appt* fades into transition within the *Today* section using the `.ongoing` attribute. Also, in the *Weekly summary* there's more css animation happening when you hover over the day blocks in the week.**

The **javascript** is in 3 different files (*appointments, collapsables, graphs*) and all the functions are being called in `packs/application.js`. 
- To trigger the **Next Appt** animation, the *Next* button takes you to the next appointment slot in the *Today* section by adding the `.ongoing` css style (*meant to signify current appointment*) to the *next* timeslot and replacing the previous appointment with a disabled style called `.previous` which fades it to gray.
- All the informative sections, except the *Revenue* graph are **collapsable**. The CSS style changes when the card/box is closed and when it is open/collapsed it shows the content within.
- The **Revenue** section requires `chart.js` from chartjs.org. I used a **Doughnut & Pie** chart to show the 3 sections for *Earnings, Tips & Remaining* using dummy data. It is animated so by clicking on a section is subtracts it. Hovering over a section shows a tooltip with the data 'amount'. The progress bar is pure *css*.

### Working App Screenshots:

**Main dashboard with collapsables closed:**

![dashboard1](https://user-images.githubusercontent.com/52960001/105102959-06d07200-5ab0-11eb-9f4d-b1cf6f5ea466.png)
![dashboard2](https://user-images.githubusercontent.com/52960001/105103018-1cde3280-5ab0-11eb-87b0-33bff4985b73.png)


**Next Appointments section opened to show next appt times and break times:**

![next appt](https://user-images.githubusercontent.com/52960001/105103077-397a6a80-5ab0-11eb-9b3f-0b70041f4ea1.png)


**Today overview section open:**

![today1](https://user-images.githubusercontent.com/52960001/105103128-531bb200-5ab0-11eb-82eb-9732cd0d7672.png)


**Today overview showing disabled timeslot and current appt with dark background:**


![today2](https://user-images.githubusercontent.com/52960001/105103166-69297280-5ab0-11eb-9f52-5723c9e9d281.png)
![today3](https://user-images.githubusercontent.com/52960001/105103187-78102500-5ab0-11eb-80a2-e80073975cc0.png)



**Revenue section showing tooltip and changing data:**


![revenue 1](https://user-images.githubusercontent.com/52960001/105103282-9e35c500-5ab0-11eb-93f6-ee86a6f2fa16.png)
![revenue 2](https://user-images.githubusercontent.com/52960001/105103292-a1c94c00-5ab0-11eb-9626-79ed530467b6.png)



**Weekly summary open and showing horizontal scroll:**

![week summary 1](https://user-images.githubusercontent.com/52960001/105103379-cfae9080-5ab0-11eb-82e1-c0945fbbbbb0.png)
![week summary 2](https://user-images.githubusercontent.com/52960001/105103390-d2a98100-5ab0-11eb-811f-ad7ca55d6ce1.png)


### Issues I encountered
Apart from the main issue being time constraints and not being able to add more features or design for more screen sizes, there were a couple of coding annoyances: 
- As Bootstrap is also being used, as well as my own css styling, there were some overrides that I did not have time to delve into and organise better. Bootstrap makes the `.btn` attribute have a `z-index: 1` which created some buttons gliding above the top fixed navbars. I had to do an `!important` override which I would not use personally as it shows bad organisation and doesn't help other users coding in the same files. I would have solved this by replacing the bootstrap style with my own css attribute but I ran out of time to check all of the files properly and this was the only style I had to override.
- When using the minimal Rails template, my webpack wouldn't precompile my assets into the proper folders and I wasted a whole day trying to fix this issue. It turned out that not only was my Node version too new, I also had to go down to an older Webpacker version for the assets to compile properly. In the end, a `packs/javascript.js` folder was created and my `<%= javascript_pack_tag 'application' %>` was linked successfully.


---

### Thank you !
