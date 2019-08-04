
$(function() {
    "use strict";

    //setting up datamodel
    var ward_page_table = [
      ["1","2","120021387","27-08-2018 01:22:12","9234589887","Supply","Urgent supply needed at Phoenix Marketcity","New"],
      ["2","6","120021323","22-12-2019 01:22:12","9234589123","Distress","Help needed at SAP LAbs India","New"]
    ];

    localStorage.setItem('ward_page_table', JSON.stringify(ward_page_table));

    populateData();
});


function populateData() {
  //dynamically create a row of table.

  // <tr>
  //     <td>1</td>
  //     <td>2</td>
  //     <td>120021387</td>
  //     <td>27-08-2018 01:22:12</td>
  //     <td>9234589887</td>
  //     <td>Supply</td>
  //     <td>Urgent supply needed at Phoenix Marketcity</td>
  //     <td><span class="badge-dot badge-primary mr-1"></span>New</td>
  // </tr>

    var ward_page_table = JSON.parse(localStorage.getItem('ward_page_table'));
    var tbody_id = document.getElementById('unassigned_requests');
    for(var j = 0; j < ward_page_table.length; j++) {
      var tr = document.createElement("tr");
      var td = [];
      for(var i = 0; i < 8; i++) {
        td[i] = document.createElement('td');
        if(i == 7) {
          var status_element = document.createElement('span');
          status_element.setAttribute("class", "badge-dot badge-primary mr-1");
          //status_element.innerHTML = ward_page_table[j][i];
          td[i].appendChild(status_element);
          td[i].innerHTML += ward_page_table[j][i];
        }
        else {
          td[i].innerHTML = ward_page_table[j][i];
        }
        tr.appendChild(td[i]);
        tbody_id.appendChild(tr);
      }
    }

}
