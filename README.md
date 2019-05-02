# Showcase website site for Dental practice

`vue` `vue.js` `vue-cli 3` `node.js` `sass` `contact-form` `SEO`

This project is a website developed for a fictional Dental practice. The essential elements of the page include: a home page, a team page, an emergency page, our services page and a page with a contact form.

The main focus of this project is to practice Vue.js and Vue-CLI 3 .

The initial scaffolding of the project is uploaded here. The `dist` folder contains the production build rendered in static html.  


👉 The final version of this project is available here: [cookiesandwifi.ovh/dentist-vuejs](http://cookiesandwifi.ovh/dentist-vuejs/)


------


## Key Elements in the project

* **VUE CLI 3** : The project was put together using Vue Cli 3 for rapid Vue.js developement. A previous version of this showcase site was done in Vue Cli 2. I wanted to improve the previous version of the site not only in regards to what was 'under the hood' but also improve its design. This was an excellent exercise to practise using Vue Cli 3. The overall results in a structured and clean project.

* **Importing global styles in Vue CLI** : The great thing about Vue Cli was being able to easily integrate librairies/frameworks through `node JS`. An example of this was adding Bootstrap 4 to the project. However the website is mainly custom designed using SASS. I added global stylesheets (mainly variables and mixins) that were automatically applied to all template components and views. This made life easier as they were automatically added to each template (unlike Vue Cli 2 where global stylesheets had to be manually added to each template style section!). Also as templates have their own style section this generally gives the project a clear structure and avoids messy stylesheets.

* **Vue Events and Conditional Rendering** : The hamburger navigation menu for mobile opens on the `@click` Vue event handler. The `v-if` directive basically toggles the style class which opens and exits the navigation menu for mobile.

* **List Rendering** : Most of the content is displayed via list rendering (`v-for`) . The `v-for` directive is used to render list of items and nested data. It avoided repeating code which simplified the structure of each page. It was used on the whole site (such as listing all the navigation menu items, all the contact information etc). It definitely kept the html structure as simple as possible as it prevented repeating code!

* **Transitions** : A beautiful fade effect is added when the user navigates to a different page.

* **Global Variables** : Certain text information (such as phone number, email and brand name) appears several times on different pages of the site. Instead of manually having to type them in every page template, they are added as a global variable / prototype in `main.js` and their variable can then be added to any template page. Any modification could be done directly in `main.js`, and would then update instantly the variable output on the whole website.

* **Contact form** : The contact form was integrated in `php` to send user messages directly to the dental practice's email address. A confirmation message appears if the form was sent. The contact form has a modern layout & feel using CSS float labels.

* **Routes Anchoring** : Route paths are specified in `router.js` and are generated in the navigation menus. As the pages are generated in static html they also need to be specified in the `vue.config.js`.

* **SEO** : This was a little tricky. Vue.js is a great framework for developing different kinds of web applications, however the asynchronous content of an application makes it difficult for search engine crawlers to access JS rendered content. In this case, I added a plugin to generate the project's production build into static HTML pages.

Additional elements added for the site's SEO was a sitemap generated [here](https://www.xml-sitemaps.com/) and added at the root of the project, as well as Meta-Data (plugin `vue-head`) including search engine tags and social media tags. A Google Analytics tag was also added at the bottom of the page track of the site's activity.

![preview](https://github.com/clairedonut/cabinet-dentaire-vuejs/blob/master/screencapture-cookiesandwifi-ovh-dentist-vuejs-2019-05-01-12_02_31.png?raw=true)
