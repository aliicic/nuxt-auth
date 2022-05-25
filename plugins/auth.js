
export default function (context) {

   context.$auth.onRedirect((to, from) => {
    if (context.route.query.app == 2) {
      context.route.query = null
      context.redirect("https://setin.nebular.ir/app2/admin");
    }

    // if (context.$auth.loggedIn) {
    //   return "/admin";
    // }

   });

}

