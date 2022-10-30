function showContent (element) {
  var contentWrapper = element.nextElementSibling;
  contentWrapper.style.visibility = 'visible';
  contentWrapper.style.opacity = 1;
}

function hideContent (element) {
  var contentWrapper = element.nextElementSibling;
  contentWrapper.style.visibility = 'hidden';
  contentWrapper.style.opacity = 0;
}

window.addEventListener('load', function () {
  var imgwrapper = document.querySelectorAll('.imgWrapper');
  imgwrapper.forEach(element => {
    element.addEventListener('mouseenter', function () {
      showContent(element)
    });
    element.addEventListener('mouseleave', function () {
      hideContent(element)
    })
  });
})