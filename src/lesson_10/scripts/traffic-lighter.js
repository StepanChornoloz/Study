export function trafficLighter(targetElement) {
  const ACTIVE_CLASS_NAME = 'traffic-lighter__lamp_active';
  const lights = targetElement.querySelectorAll('.traffic-lighter__lamp');
  let activeElement;

  function tornOnLight(element) {
    if (activeElement !== undefined) {
      activeElement.classList.remove(ACTIVE_CLASS_NAME)
    }
    activeElement = element;
    element.classList.toggle(ACTIVE_CLASS_NAME);
  }

  for (let i = 0; i < lights.length; i += 1) {
    lights[i].onclick = function () {
      tornOnLight(lights[i]);
    };
  }
}
