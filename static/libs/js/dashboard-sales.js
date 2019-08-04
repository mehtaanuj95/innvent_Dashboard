
$(function() {
    "use strict";

    //setting up datamodel
    var main_page_table = [
      ["5","Whitefield","W-1027","3","Abhojith Dasarathi","1234567","12","In Process"],
      ["5","Whitefield","W-1027","3","abc","1234567","12","In Process"],
      ["5","Whitefield","W-1027","3","abc","1234567","12","In Process"],
      ["5","Whitefield","W-1027","3","abc","1234567","12","In Process"]
    ];

    localStorage.setItem('main_page_table', JSON.stringify(main_page_table));





    // ==============================================================
    // Revenue
    // ==============================================================
 var ctx = document.getElementById('revenue').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Current Week',
                        data: [12, 19, 3, 17, 6, 3, 7],
                      backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                                    borderWidth: 2

                    }, {
                        label: 'Previous Week',
                        data: [2, 29, 5, 5, 2, 3, 10],
                          backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                                    borderWidth: 2
                    }]
                },
                options: {

                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },
                    scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        },


         scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontSize: 14,
                                            fontFamily: 'Circular Std Book',
                                            fontColor: '#71748d',
                                        }
                                    }]
                                }

                }
            });

    // ==============================================================
    // Total Sale
    // ==============================================================
 var ctx = document.getElementById("total-sale").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',

                data: {
                    labels: ["New", " In process", "Others", "Completed"],
                    datasets: [{
                        backgroundColor: [
                            "#5969ff",
                            "#ff407b",
                            "#25d5f2",
                            "#ffc750"
                        ],
                        data: [237, 357, 157, 786]
                    }]
                },
                options: {
                    legend: {
                        display: false

                    }
                }

            });


    // ==============================================================
    // Location Map
    // ==============================================================
     jQuery('#locationmap').vectorMap({

                map: 'world_mill_en',
                backgroundColor: 'transparent',
                borderColor: '#000',
                borderOpacity: 0,
                borderWidth: 0,
                zoomOnScroll: false,
                color: '#25d5f2',
                regionStyle: {
                    initial: {
                        fill: "#e3eaef"
                    }
                },
                markerStyle: {
                    initial: {
                        r: 9,
                        fill: "#25d5f2",
                        "fill-opacity": .9,
                        stroke: "#fff",
                        "stroke-width": 7,
                        "stroke-opacity": .4
                    },
                    hover: {
                        stroke: "#fff",
                        "fill-opacity": 1,
                        "stroke-width": 1.5
                    }
                },

                markers: [{
                    latLng: [40.71, -74],
                    name: "New York"
                }, {
                    latLng: [37.77, -122.41],
                    name: "San Francisco"
                }, {
                    latLng: [-33.86, 151.2],
                    name: "Sydney"
                }, {
                    latLng: [1.3, 103.8],
                    name: "Singapore"
                }],


                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#25d5f2', '#25d5f2'],
                selectedColor: '#c9dfaf',
                selectedRegions: [],
                showTooltip: true,
                onRegionClick: function(element, code, region) {
                    var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                    alert(message);
                }

            });


 // ==============================================================
    // Revenue Cards
    // ==============================================================
    $("#sparkline-1").sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5969ff',
        fillColor: '#dbdeff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });



    $("#sparkline-2").sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ff407b',
        fillColor: '#ffdbe6',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });



    $("#sparkline-3").sparkline([5, 3, 4, 6, 5, 7, 9, 4, 3, 5, 6, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#dffaff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });



    $("#sparkline-4").sparkline([6, 5, 3, 4, 2, 5, 3, 8, 6, 4, 5, 1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fec957',
        fillColor: '#fff2d5',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true,
    });

});


function populateData() {
  //dynamically create a row of table.

  // <tr>
  //     <td>1</td>
  //     <td><a href="pages/ward_details.html">WhiteField  </a></td>
  //     <td>W-1023 </td>
  //     <td>3</td>
  //     <td>Abhijith Dasarathi </td>
  //     <td>9293454556</td>
  //     <td>2</td>
  //     <td><span class="badge-dot badge-success mr-1"></span>Under Control </td>
  // </tr>

    var main_page_table = JSON.parse(localStorage.getItem('main_page_table'));
    var tbody_id = document.getElementById('recent_requests_id');
    for(var j = 0; j < main_page_table.length; j++) {
      var tr = document.createElement("tr");
      var td = [];
      for(var i = 0; i < 8; i++) {
        td[i] = document.createElement('td');
        if(i == 7) {
          var status_element = document.createElement('span');
          status_element.setAttribute("class", "badge-dot badge-success mr-1");
          //status_element.innerHTML = main_page_table[j][i];
          td[i].appendChild(status_element);
          td[i].innerHTML += main_page_table[j][i];
        }
        else {
          td[i].innerHTML = main_page_table[j][i];
        }
        tr.appendChild(td[i]);
        tbody_id.appendChild(tr);
      }
    }

}
