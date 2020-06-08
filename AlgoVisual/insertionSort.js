async function insertionSort() {
  var InputCase = document.getElementById("caseInput").value;
  console.log(InputCase);
  if (InputCase === "N") {
    var message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show text-center" style="width: 100%;" role="alert">
                            Please Select an Option!!!
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>`;
  } else if (InputCase === "B") {
    var array = [1, 6, 3, 4, 5, 6, 7, 8, 9, 10];
    display(array);
    await InsertionSort(array);
  } else if (InputCase === "A") {
    var array = [4, 6, 5, 10, 4, 6, 4, 3, 2, 4];
    display(array);
    await InsertionSort(array);
  } else if (InputCase === "W") {
    var array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    display(array);
    await InsertionSort(array);
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
// -------------SELECTION SORT ----------------
async function InsertionSort(array) {
  var Status = document.getElementById("status");

  for (var i = 1; i < array.length; ++i) {
    var key = array[i];
    var j = i - 1;

    /* Move elements of arr[0] to current index-1 , 
       that are  greater than the current element, 
       to one position ahead of their current position */

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
      Status.innerHTML = `SORTING .....`;
    }
    array[j + 1] = key;
    await DisplayResult(array);
  }
  Status.innerText = `Array sorted !!!`;
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
