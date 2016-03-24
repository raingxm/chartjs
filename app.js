var data = {
  labels: ["gxm", "lsc", "yc"],
  datasets: [
    {
      data: [40, 50, 20]    
    }
  ]
};

var ctx = document.querySelector('#graph').getContext('2d');

new Chart(ctx).Line(data);