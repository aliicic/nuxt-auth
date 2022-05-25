export default function ({ $auth, redirect }) {
  console.log($auth);
  if ($auth.loggedIn) { return true }
  else {
    alert('login first')
    return redirect("/")
  };
}
