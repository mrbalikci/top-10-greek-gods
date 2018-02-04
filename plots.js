// Sort the data based on the search resutls 

data.sort(function (x, y) {
    return parseFloat(y.greekSearchResults) - parseFloat(x.greekSearchResults)
});

data = data.slice(0, 10);

// console.log(data);

trace = {
    x: data.map(row => row.greekSearchResults),
    y: data.map(row => row.greekName),
    text: data.map(row => row.greekName),
    type: "bar",
    name: "Greek",
    orientation: "h"
};

data = [trace];

var layout = {
    title: "Top 10 Greek Gods",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100

    }
};

Plotly.newPlot("plot", data, layout)