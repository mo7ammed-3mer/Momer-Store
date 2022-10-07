//Options for the observer
const options = {
  //Threshold controls what percentage of the element show be
  // visible before the callback is executed ( 0 - 1)
  threshold: 0.15,
};

const callback = (entries) => {
  //A function to add class 'show' to every element that enters
  //the viewport and removes it when it leaves.
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

//All the sections on the page have the hidden class which
//will be used by the observer
const hiddenElements = document.querySelectorAll(".hidden");

//Calling the observer on all the sections
hiddenElements.forEach((el) => observer.observe(el));
