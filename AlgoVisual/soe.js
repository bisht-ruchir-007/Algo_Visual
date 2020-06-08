async function soe() {
  var range = document.getElementById("range").value;
  //   console.log(range);
  var msg = document.getElementById("message");

  if (range == "") {
    msg.innerHTML = `<div class="alert alert-danger alert-dismissible fade show text-center" style="width: 100%;" role="alert">
                        Please Enter a value range [2,n]!! 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
  } else {
    range = parseInt(range);

    if (range > 2) {
      var array = [0, 1];
      for (var i = 2; i <= range; i++) {
        array.push(i);
      }
      display(array);
      await SOE(array);
    } else {
      msg.innerHTML = `<div class="alert alert-danger alert-dismissible fade show text-center" style="width: 100%;" role="alert">
                        Please Enter a value range [2,n] !! 
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
    }
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const DisplayResult = async (array) => {
  await sleep(1000);
  display(array);
  //   console.log(array);
};

// function for array sorting USING
// ------------- SOE ----------------
async function SOE(array) {
  var Status = document.getElementById("status");
  for (var p = 2; p * p <= array.length; p++) {
    // If prime[p] is not changed, then it is a prime
    if (array[p] > 1) {
      // Update all multiples of p
      //   Status.innerHTML = `Removing all the multiples of ${array[p]}`;
      for (var i = p * p; i <= array.length; i += p) {
        if (array[i] > 0) {
          Status.innerHTML = `${array[i]} is removed since its a multiple of ${array[p]}`;
          array[i] = 0;
          await DisplayResult(array);
        }
      }
    }
  }
  Status.innerText = `Since 1 is not consider as a prime number so removing 1`;
  array[1] = 0;
  await DisplayResult(array);
  Status.innerText = `All the below values are prime in the range [1 , ${
    array.length - 1
  }]`;
}

function display(array) {
  var Data = [];
  for (var i = 0; i < array.length; i++) {
    var value = parseInt(array[i], 10);
    var t = { x: i, y: value };
    Data.push(t);
  }
  //   console.log(Data);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: false,
    theme: "light1", // "light1", "light2", "dark1", "dark2"

    data: [
      {
        type: "column",
        indexLabel: "{y}",
        indexLabelPlacement: "inside",
        indexLabelOrientation: "horizontal",
        showInLegend: false,
        dataPoints: Data,
      },
    ],
  });
  chart.render();
}
