const heading = React.createElement("div",
    {id:"first"}, [
        React.createElement("h1", {id:"second"}, "Hello World from Child"),
        React.createElement("h2", {id:"three"}, "Hello World from Three"),
        React.createElement("p", {id:"fourth"}, "Hello World from fourth")
    ],
    [
        React.createElement("img", {src:"https://namastedevprod.s3.ap-south-1.amazonaws.com/banner+and+logos/name.png"}, )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);