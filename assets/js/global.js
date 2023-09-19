"use strict";

//  Add Event on multiple elements

const addEventsOnElements = function (elements, eventType, callback) {
  for (const elem of elements) elem.addEventListener(eventType, callback);
};

// Toggle search box in mobile device || small device

const seachBox = document.querySelector("[search-box]");

const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventsOnElements(searchTogglers, "click", function () {
  seachBox.classList.toggle("active");
});
