Vue.component('featured-card', {
  template: '<div class="rounded-lg bg-dark p-sm" style="width: max-content;"> <span style="display: flex; vertical-align: middle !important;"> <h4>{{name}}</h4><h5><ion-icon name="checkmark-circle" style="color: var(--primary) !important;"></ion-icon></h5> </span> <p>{{desc}}</p> <a :href="path" :id="passed-info" class="button button-primary w-100 goToTheme">{{btn}}</a></div>',
  props: ['name', 'desc', 'path', 'btn', 'passed-info']
});

for ( let i; i < $(".goToTheme").length; i++) {
  $(".goToTheme")[i].click(function() {
    localStorage.setItem("themeKey", $(".goToTheme")[i].attr("id"));
    console.log(localStorage.getItem("themeKey"));
  });
}

var app = new Vue({
 el: "#featuredComponents" 
})