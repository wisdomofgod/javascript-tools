    var domList = [];

    window.$ = window.$ || function (id) {
      var dom = domList[id] ? domList[id] : domList[id] = document.getElementById(id);
      if (!dom) {
        return false;
      }

      function show() {
        console.log(dom);
        dom.style.display = "block";
      }

      function hide() {
        dom.style.display = "none";
      }

      function on(listener, callback) {
        dom['on'+ listener] = callback;
      }

      function html(html) {
        dom.innerHTML = html;
      }

      return {
        show: show,
        hide: hide,
        on: on,
        html: html
      };
    }

var alert = (function(){
  var shade = $('shade');
  var modal = document.createElement('div');
  modal.id = 'alertModal';
  modal.className = 'alertModal';
  modal.innerHTML =  `    
  <div class="modalBox">
    <div class="title">提示</div>
      <div class="content-panel">
        <h3 id="alertValue"></h3>
        <div class="button-panel">
          <button id="alertOk">是</button><button id="close">否</button>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(modal);

  if(!shade){
    var shade = document.createElement('div');
    shade.id = 'shade';
    shade.className = 'shade';
    document.body.appendChild(shade);
  }

  function alert(msg){
    $('alertValue').html(msg);
    $('shade').show();
    $('alertModal').show();
  }

  $('alertOk').on('click',function(){
    $('shade').hide();
    $('alertModal').hide();
  });

  $('close').on('click',function(){
    $('shade').hide();
    $('alertModal').hide();
  });

  return alert;
})();