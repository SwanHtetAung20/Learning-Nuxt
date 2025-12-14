export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Global auth middleware triggered");
  //   const isLoggedIn = false;

  //   if (!isLoggedIn && to.path !== "/profile") {
  //     return navigateTo("/profile");
  //   }
});
