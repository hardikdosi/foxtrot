function drawLegend(columns, element) {
    if(!element) {
        return;
    }
    //columns.sort(function (lhs, rhs){
    //    return rhs.data - lhs.data;
    //});
    element.html(handlebars("#group-legend-template", {data: columns}));
}
function drawLegendPrevious(columns, element) {
    if(!element) {
        return;
    }
    /* columns.sort(function (lhs, rhs){
     return rhs.data - lhs.data;
     });*/
    element.html(handlebars("#group-legend-template-previous", {data: columns}));
}

