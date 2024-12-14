$(document).ready(function () {
  const floors = 10;
  const elevators = $('.elevator');
  const callQueue = [];
  const speed = 1000; // Speed per floor in ms
  const elevtrHeight = 90;
  // Create floors with call buttons
  for (let i = floors; i > 0; i--) {
    $('#building').append(`
      <div class="floor-container">
        <span>Floor ${i}</span>
        <button class="btn call-btn" data-floor="${i}">Call</button>
      </div>
    `);
  }

  // Handle call button clicks
  $(document).on('click', '.call-btn', function () {
    const floor = parseInt($(this).data('floor'));

    if (!$(this).hasClass('waiting')) {
      $(this).addClass('waiting').text('Waiting');
      callQueue.push(floor);
      console.log(callQueue);
      processQueue();
    }
  });

  function processQueue() {
    if (callQueue.length === 0) return;

    const targetFloor = callQueue.shift();
    console.log("after shift....");
    console.log(callQueue);
    console.log(targetFloor);

    // Find the closest available elevator
    let closestElevator = null;
    let minDistance = Infinity;

    elevators.each(function () {
      const currentFloor = parseInt($(this).data('floor'));
      const distance = Math.abs(currentFloor - targetFloor);

      if (distance < minDistance && !$(this).hasClass('moving')) {
        closestElevator = $(this);
        minDistance = distance;
      }
    });

    if (closestElevator) {
      moveElevator(closestElevator, targetFloor);
    } else {
      // If all elevators are busy, push back the floor into the queue
      callQueue.unshift(targetFloor);
      console.log("after unshift....");
      console.log(callQueue);
    }
  }

  function moveElevator(elevator, targetFloor) {
    const currentFloor = parseInt(elevator.data('floor'));
    const distance = Math.abs(currentFloor - targetFloor);
    const travelTime = distance * speed;

    console.log("travelTime --" + travelTime);

    elevator.addClass('moving');

    const targetTop = (targetFloor) * elevtrHeight;

    console.log("targetTop --" + targetTop);

    elevator.css('transform', `translateY(-${targetTop}px)`); // Negetive

    elevator.data('floor', targetFloor);

    const newFloor = parseInt(elevator.data('floor'));
    console.log("new floor --" + newFloor);

    setTimeout(() => {
      // Elevator reaches the target floor
      // Will add the sound Player
      elevator.css('background-color', 'red');

      setTimeout(() => {
        elevator.css('background-color', 'green');

        setTimeout(() => {
          elevator.css('background-color', 'black').removeClass('moving');
          $(`.call-btn[data-floor="${targetFloor}"]`).removeClass('waiting').text('Call');
          processQueue(); // Recursive until array have values >> Process the next call
        }, 2000);
      }, 2000);
    }, travelTime);
  }
});
