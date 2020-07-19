google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Registrations'],
      ['Argentina', 20],
      ['Australia', 9],
      ['Belgium', 3],
      ['Brazil', 3],
      ['Canada', 3],
      ['Chile', 4],
      ['China', 3],
      ['Croatia', 1],
      ['Czech Republic', 2],
      ['Denmark', 1],
      ['Estonia', 1],
      ['France', 5],
      ['Georgia', 2],
      ['Germany', 2],
      ['Greece', 3],
      ['Hong Kong', 2],
      ['Hungary', 5],
      ['India', 16],
      ['Idonesia',11 ],
      ['Ireland',9 ],
      ['Italy', 11],
      ['Japan',1 ],
      ['Jordan',1 ],
      ['Lebanon',1 ],
      ['Libya', 2],
      ['Malaysia',18 ],
      ['Mexico', 4],
      ['Myanmar', 1],
      ['Netherlands',2 ],
      ['Pakistan', 2],
      ['Paraguay',1 ],
      ['Peru', 2],
      ['Philippines',1 ],
      ['Portugal', 6],
      ['Qatar', 1],
      ['Saudi Arabia', 1],
      ['Singapore', 5],
      ['Slovenia',2],
      ['South Africa', 1],
      ['Spain',35 ],
      ['Sweden',1 ],
      ['Taiwan',5 ],
      ['Thailand', 1],
      ['Turkey',6 ],
      ['United Arab Emirates', 1],
      ['United States', 8],
      ['Venezuela', 1],
      ['Vietnam', 2],
      ['GB', 256],

    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
