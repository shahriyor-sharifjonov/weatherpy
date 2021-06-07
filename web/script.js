async function display_weather(){
  let place = document.getElementById('location').value;

  let res = await eel.get_weather(place)();
  document.getElementById('info').innerHTML = res;
}

jQuery('#show').on('click', function() {
  display_weather();
})