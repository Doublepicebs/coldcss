Vue.component('featured-card', {
  template: '<div class="rounded-lg bg-dark p-sm" style="width: max-content;"> <span style="display: flex; vertical-align: middle !important;"> <h4>{{name}}</h4><h5><ion-icon name="checkmark-circle" style="color: var(--primary) !important;"></ion-icon></h5> </span> <p>{{desc}}</p> <a href="{{path}}" class="button button-primary w-100">{{btn}}</a></div> <script>function pass() { var b = {{name}}.value, url = "themePage.html?name=" + encodeURIComponent(b); document.location.href = url;} </script>',
  props: ['name', 'desc', 'path', 'btn']
});

var app = new Vue({
 el: "#featuredComponents" 
})