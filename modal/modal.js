var alert = (function(){
  var shade = $('shade');
  var modal = document.createElement('div');
  modal.id = 'alertModal';
  modal.className = 'alertModal';
  modal.innerHTML = '<div class="mycontent"><h3 id="alertValue"></h3><button id="alertOk">确定</button></div></div>';
  document.body.appendChild(modal);
  if(!shade){
    var shade = document.createElement('div');
    shade.id = 'shade';
    shade.className = 'shade';
    document.body.appendChild(shade);
  }

  (function(){
    var domList = [];

    function $(id) {
      var dom = domList[id] ? domList[id] : domList[id] = document.getElementById(id);

      function show() {
        dom.style.display = "block";
      }
      function hide() {
        dom.style.display = "none";
      }
      function on(listener, callback) {
        dom['on'+ listener] = callback;
      }

      return {
        show: show,
        hide: hide,
        on: on
      };
    }
  })();

  function alert(msg){
    $('alertValue').innerHTML = msg;
    $('shade').show();
    $('alertModal').show();
  }

  $('alertOk').on('click',function(){
    $('shade').hide();
    $('alertModal').hide();
  });

  return alert;
})();