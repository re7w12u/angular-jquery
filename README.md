# Ng2BootstrapDatepicker

Simple app used to check how to embed jquery within an angular app. I know that's not best practice but still it could be useful in some cases, especially for plugins.


Here is how I've proceed :

>npm install --save moment
>npm install --save bootstrap
>npm install --save jquery-ui-dist
>npm install --save jquery

copy bootstrap-datetimepicker.min.js|css to assets folder

modify the angular-cli.json to include those files :

      "styles": [
        "../node_modules/jquery-ui-dist/jquery-ui.min.css",
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "./assets/bootstrap-datetimepicker.min.css",
        "styles.css"
      ],
      "scripts": [
        "../node_modules/moment/min/moment.min.js",
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/jquery-ui-dist/jquery-ui.min.js",
        "../node_modules/bootstrap/js/transition.js",
        "../node_modules/bootstrap/js/collapse.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "./assets/bootstrap-datetimepicker.min.js"
        ],

create new components

declare a variable to mock jquery : 

declare var jQuery:any;

I've created 2  components for the date picker to show different possibilities on how to use jquery

Thrid component use the draggable feature